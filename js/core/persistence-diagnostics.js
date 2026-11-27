/** INF-ESTUDO — ensaios isolados de persistência; dados reais somente leitura. */
import { STORAGE_KEY } from './storage.js';
import { createInitialState } from './state.js';
import { inspectStoredProgress, validateStateForSaving } from './storage-safety.js';
import { normalizeRecoveryInput, protectCurrentProgress, RECOVERY_KEY } from './progress-recovery-guard.js';
import { BACKUP_FORMAT, validateProgressBackup } from './progress-backup-validator.js';
function mockStorage(initial={}, failWrite=false){
  const data=new Map(Object.entries(initial));
  return {getItem:k=>data.has(k)?data.get(k):null,
    setItem(k,v){if(failWrite)throw Error('Falha simulada');data.set(k,String(v));},
    removeItem:k=>data.delete(k),snapshot:()=>JSON.stringify([...data])};
}
const envelope=state=>({format:BACKUP_FORMAT,backupVersion:1,createdAt:new Date().toISOString(),storageKey:STORAGE_KEY,schemaVersion:state.schemaVersion,state});
export function runPersistenceDiagnostics(storage=window.localStorage){
  const checks=[],check=(label,passed,detail='')=>checks.push({label,passed:!!passed,detail});
  const original=createInitialState();original.progress.modules['INF-01']={diagnostic:{answered:2}};
  const raw=JSON.stringify(original),replacement=JSON.stringify(envelope({...original,metadata:{...original.metadata,updatedAt:new Date().toISOString()}}));
  try{
    check('Instalação nova é aceita',inspectStoredProgress(mockStorage()).code==='empty');
    check('Estado compatível é reconhecido',inspectStoredProgress(mockStorage({[STORAGE_KEY]:raw})).ok);
    check('Estado PT é bloqueado',!inspectStoredProgress(mockStorage({[STORAGE_KEY]:JSON.stringify({...original,appId:'pt-estudo'})})).ok);
    check('Estado ADM é bloqueado',!inspectStoredProgress(mockStorage({[STORAGE_KEY]:JSON.stringify({...original,appId:'adm-estudo'})})).ok);
    check('Esquema incompatível é bloqueado',!inspectStoredProgress(mockStorage({[STORAGE_KEY]:JSON.stringify({...original,schemaVersion:-1})})).ok);
    check('JSON danificado é preservado',(()=>{const s=mockStorage({[STORAGE_KEY]:'{incompleto'});const before=s.snapshot();return !inspectStoredProgress(s).ok&&before===s.snapshot();})());
    check('Estado incompleto é recusado',!validateStateForSaving({schemaVersion:original.schemaVersion,progress:{}}));
    check('Estado válido é aceito',validateStateForSaving(original));
    check('Backup INF é aceito',validateProgressBackup(envelope(original)).valid);
    check('Backup PT é recusado',!validateProgressBackup({...envelope(original),format:'pt-estudo-progress-backup'}).valid);
    check('Backup ADM é recusado',!validateProgressBackup({...envelope(original),format:'adm-estudo-progress-backup'}).valid);
    check('Recuperação bruta INF é reconhecida',normalizeRecoveryInput(original).ok);
    const isolated=mockStorage({[STORAGE_KEY]:raw});
    const result=protectCurrentProgress(raw,replacement,isolated);
    check('Estado anterior protegido',result.ok&&isolated.getItem(RECOVERY_KEY)===raw&&isolated.getItem(STORAGE_KEY)===raw);
    check('Recuperação pendente bloqueia nova restauração',!protectCurrentProgress(raw,replacement,isolated).ok);
    const failing=mockStorage({[STORAGE_KEY]:raw},true),before=failing.snapshot();
    check('Falha na recuperação preserva progresso',!protectCurrentProgress(raw,replacement,failing).ok&&failing.snapshot()===before);
    const invalid=mockStorage({[STORAGE_KEY]:raw});
    check('Backup estrangeiro não cria recuperação',!protectCurrentProgress(raw,JSON.stringify({...original,appId:'pt-estudo'}),invalid).ok&&invalid.getItem(RECOVERY_KEY)===null);
  }catch(e){check('Execução dos testes isolados',false,String(e?.message||e));}
  try{
    const status=inspectStoredProgress(storage);check('Progresso real: somente leitura e compatibilidade',status.ok,status.message);
    const before=storage.getItem(STORAGE_KEY);
    if(before!==null)check('Progresso real: serialização reversível',JSON.stringify(JSON.parse(before))===before);
    const rec=storage.getItem(RECOVERY_KEY);
    check('Cópia de recuperação real é legível',rec===null||normalizeRecoveryInput(JSON.parse(rec)).ok);
  }catch(e){check('Leitura do armazenamento real',false,String(e?.message||e));}
  return {ok:checks.every(x=>x.passed),readOnlyOnRealStorage:true,checks};
}
export function formatPersistenceDiagnostics(report){return ['DIAGNÓSTICO DE PERSISTÊNCIA — INF-ESTUDO','Escrita somente em armazenamento simulado. Dados reais: leitura apenas.','',...report.checks.map(c=>`${c.passed?'OK':'FALHA'} — ${c.label}${c.detail?': '+c.detail:''}`),'',report.ok?'Verificações concluídas sem alertas.':'Existem falhas. Preserve backups e investigue.','Não testa rede real nem falhas físicas do navegador.'].join('\n');}
export function renderPersistenceDiagnosticsButton(){return `<section aria-label="Diagnóstico de persistência"><h2 class="section-title">Persistência e recuperação</h2><p>Testes isolados de falhas; progresso real sem alterações.</p><button type="button" class="btn btn-secondary" data-persistence-diagnostics="1">Executar testes de persistência</button></section>`;}
