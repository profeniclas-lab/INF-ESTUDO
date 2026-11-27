/** INF-ESTUDO — testes simulados de armazenamento e isolamento. */
import { STORAGE_KEY } from './storage.js';
import { createInitialState, normalizeState } from './state.js';
import { inspectStoredProgress, validateStateForSaving } from './storage-safety.js';
function mockStorage(seed={},options={}){
 const data=new Map(Object.entries(seed)); let writes=0;
 return {getItem(k){if(options.failRead)throw Error('Leitura indisponível');return data.has(k)?data.get(k):null;},
 setItem(k,v){if(options.failWrite||(options.failAfter!=null&&writes>=options.failAfter))throw Error('Falha de gravação simulada');writes++;data.set(k,String(v));},
 removeItem:k=>data.delete(k),snapshot:()=>JSON.stringify([...data])};
}
function simulatedSave(storage,state){
 const status=inspectStoredProgress(storage);
 if(!status.ok||!validateStateForSaving(state))return {ok:false,message:status.message};
 try{const previous=storage.getItem(STORAGE_KEY),next=JSON.stringify(state);
  if(storage.getItem(STORAGE_KEY)!==previous)return {ok:false,message:'Conflito detectado'};
  storage.setItem(STORAGE_KEY,next);
  return {ok:storage.getItem(STORAGE_KEY)===next};
 }catch(e){return {ok:false,message:String(e?.message||e)};}
}
export function runStorageRoundtripTests(realStorage=window.localStorage){
 const checks=[],check=(name,passed,detail='')=>checks.push({name,passed:!!passed,detail});
 const state=createInitialState();state.progress.modules['INF-01']={percentage:42,completed:false};
 state.progress.questionHistory['Q-INF-01-001-01']=[{correct:true,at:'2026-01-01T00:00:00.000Z'}];
 state.progress.errors.push({questionId:'Q-INF-01-001-02',count:1});
 const original=JSON.stringify(state);
 try{
  const foreign='PT-SENTINEL',foreignKey='ptEstudo.v1.state';
  const isolated=mockStorage({[foreignKey]:foreign});
  check('Primeiro salvamento',simulatedSave(isolated,state).ok);
  const loaded=inspectStoredProgress(isolated);
  check('Recarga mantém estado',loaded.ok&&JSON.stringify(normalizeState(loaded.state).progress)===JSON.stringify(state.progress));
  check('Chave PT permanece intocada',isolated.getItem(foreignKey)===foreign);
  state.progress.modules['INF-01'].percentage=75;
  check('Segundo salvamento',simulatedSave(isolated,state).ok);
  check('Segunda recarga',inspectStoredProgress(isolated).state?.progress.modules['INF-01']?.percentage===75);
  for(const [name,bad] of [['Português',{...state,appId:'pt-estudo'}],['Administração',{...state,appId:'adm-estudo'}]]){
    const s=mockStorage({[STORAGE_KEY]:JSON.stringify(bad)}),before=s.snapshot();
    check('Estado '+name+' não sobrescrito',!simulatedSave(s,state).ok&&s.snapshot()===before);
  }
  const corrupt=mockStorage({[STORAGE_KEY]:'{arquivo-incompleto'}),before=corrupt.snapshot();
  check('JSON corrompido preservado',!simulatedSave(corrupt,state).ok&&corrupt.snapshot()===before);
  const incompatible=mockStorage({[STORAGE_KEY]:JSON.stringify({...state,schemaVersion:-1})}),snap=incompatible.snapshot();
  check('Esquema incompatível preservado',!simulatedSave(incompatible,state).ok&&incompatible.snapshot()===snap);
  const failWrite=mockStorage({[STORAGE_KEY]:original},{failWrite:true});
  check('Falha de gravação preserva dados',!simulatedSave(failWrite,state).ok&&failWrite.snapshot()===mockStorage({[STORAGE_KEY]:original}).snapshot());
  check('Falha de leitura bloqueia gravação',!simulatedSave(mockStorage({[STORAGE_KEY]:original},{failRead:true}),state).ok);
  check('Estado incompleto não é gravado',!simulatedSave(isolated,{...state,progress:{modules:{}}}).ok);
 }catch(e){check('Execução dos testes simulados',false,String(e?.message||e));}
 try{
  const before=realStorage.getItem(STORAGE_KEY),inspected=inspectStoredProgress(realStorage),after=realStorage.getItem(STORAGE_KEY);
  check('Inspeção real sem alterações',before===after,inspected.message);
  check('Compatibilidade real',inspected.ok,inspected.message);
 }catch(e){check('Leitura do armazenamento real',false,String(e?.message||e));}
 return {ok:checks.every(c=>c.passed),checks,realStorageReadOnly:true};
}
export function formatStorageRoundtripTests(report){return ['INF-ESTUDO | TESTES DE CARREGAMENTO E SALVAMENTO','Gravações simuladas em Map, armazenamento real somente leitura.','',...report.checks.map(c=>`${c.passed?'OK':'FALHA'} — ${c.name}${c.detail?': '+c.detail:''}`),'',report.ok?'Verificações concluídas sem falhas.':'Existem falhas ou pendências.','Limites: não testa quota, rede, execução física do navegador ou concorrência real.'].join('\n');}
export function renderStorageRoundtripTestsButton(){return '<section aria-label="Testes de carregamento e salvamento"><h2 class="section-title">Testes de carregamento e salvamento</h2><p>Simula salvamentos e falhas sem modificar seu progresso real.</p><button type="button" class="btn btn-secondary" data-storage-roundtrip-tests="1">Testar carregamento e salvamento</button></section>';}
