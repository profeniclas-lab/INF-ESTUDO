/** INF-ESTUDO — verificações não destrutivas de integridade e isolamento. */
import {STORAGE_KEY} from './storage.js';
import {APP_ID,STATE_SCHEMA_VERSION,createInitialState} from './state.js';
import {BACKUP_FORMAT,validateProgressBackup} from './progress-backup-validator.js';
import {normalizeRecoveryInput,RECOVERY_KEY} from './progress-recovery-guard.js';
import {validateStateForSaving,inspectStoredProgress} from './storage-safety.js';
import {inspectProgressIdentity} from './progress-identity.js';
const envelope=state=>({format:BACKUP_FORMAT,backupVersion:1,createdAt:new Date().toISOString(),storageKey:STORAGE_KEY,schemaVersion:state.schemaVersion,state});
export function runBackupIntegrityChecks(storage=window.localStorage){
 const checks=[];const check=(label,pass,details='')=>checks.push({label,pass:!!pass,details});
 try{
  const state=createInitialState(); state.progress.modules['INF-01']={example:true}; const backup=envelope(state);
  check('Backup de Informática é aceito',validateProgressBackup(backup).valid);
  check('Serialização preserva o progresso',validateProgressBackup(JSON.parse(JSON.stringify(backup))).valid);
  for(const app of ['pt-estudo','adm-estudo','dir-adm'])
    check(`Backup identificado como ${app} é rejeitado`,!validateProgressBackup(envelope({...state,appId:app})).valid);
  for(const foreign of ['pt-estudo-progress-backup','adm-estudo-progress-backup'])
    check(`Formato ${foreign} é rejeitado`,!validateProgressBackup({...backup,format:foreign}).valid);
  check('Chave estrangeira é rejeitada',!validateProgressBackup({...backup,storageKey:'ptEstudo.v1.state'}).valid);
  check('Estado sem identificação é rejeitado',!validateProgressBackup(envelope({...state,appId:undefined})).valid);
  check('Identidade correta do aplicativo',state.appId===APP_ID);
  check('Esquema incompatível é rejeitado',!validateProgressBackup({...backup,schemaVersion:STATE_SCHEMA_VERSION+1}).valid);
  check('Backup incompleto é rejeitado',!validateProgressBackup({...backup,state:{...state,progress:null}}).valid);
  check('Recuperação INF é aceita',normalizeRecoveryInput(state).ok);
  check('Recuperação PT é rejeitada',!normalizeRecoveryInput({...state,appId:'pt-estudo'}).ok);
  check('Recuperação ADM é rejeitada',!normalizeRecoveryInput({...state,appId:'adm-estudo'}).ok);
  const foreignIds=['POR-01','RED-03','ADM-01','AP-10','DA-17'];
  for(const id of foreignIds){
    const c=JSON.parse(JSON.stringify(state));c.progress.modules[id]={started:true};
    check('Módulo estrangeiro '+id+' rejeitado',!validateProgressBackup(envelope(c)).valid);
  }
  const nestedCases=[
    ['Fila de revisão de Português',p=>{p.reviewQueue=[{moduleId:'POR-01'}];}],
    ['Simulado com questão administrativa',p=>{p.simulados={active:{ids:['Q-DA-17-001-01']},history:[]};}],
    ['Histórico de área de Redação',p=>{p.simulados={active:null,history:[{area:'RED'}]};}],
    ['Banco de questões PT',p=>{p.questionBank={session:{ids:['Q-POR-01-001-01']}};}],
    ['Banco: filtro de módulo administrativo',p=>{p.questionBank={filter:{moduleId:'DA-17'}};}],
    ['Revisão adaptativa administrativa',p=>{p.adaptiveReview={'question:Q-ADM-01-001-01':{}};}],
    ['Jornada: ID composto PT',p=>{p.journey={events:[{id:'question:2026-11-26:Q-POR-01-001-01'}]};}]
  ];
  for(const [name,mutate] of nestedCases){const c=JSON.parse(JSON.stringify(state));mutate(c.progress);check(name,!validateProgressBackup(envelope(c)).valid);}
  check('Validação de gravação bloqueia revisão alheia',(()=>{const c=JSON.parse(JSON.stringify(state));c.progress.reviewQueue=[{questionId:'Q-ADM-01-001-01'}];return !validateStateForSaving(c);})());
  check('Texto livre pode mencionar outras matérias',(()=>{const c=JSON.parse(JSON.stringify(state));c.progress.questionHistory['Q-INF-01-001-01']={note:'Exemplo explicativo: ADM-01 e POR-01 são IDs antigos.'};return inspectProgressIdentity(c).ok&&validateProgressBackup(envelope(c)).valid;})());
  const fake={getItem:k=>k===STORAGE_KEY?JSON.stringify({...state,progress:{...state.progress,reviewQueue:[{moduleId:'POR-01'}]}}):null};
  check('Progresso inválido é reconhecido sem alteração',!inspectStoredProgress(fake).ok);
 }catch(e){check('Testes de referência',false,String(e?.message||e));}
 try{const raw=storage.getItem(STORAGE_KEY);check('Progresso local',raw===null||validateProgressBackup(envelope(JSON.parse(raw))).valid);}catch(e){check('Progresso local',false,String(e?.message||e));}
 try{const raw=storage.getItem(RECOVERY_KEY);check('Recuperação local',raw===null||normalizeRecoveryInput(JSON.parse(raw)).ok);}catch(e){check('Recuperação local',false,String(e?.message||e));}
 return {ok:checks.every(x=>x.pass),checks,readOnly:true};
}
export function formatBackupIntegrityReport(report){return ['DIAGNÓSTICO DE INTEGRIDADE — INF-ESTUDO','Somente leitura: nenhum dado real foi alterado.','',...report.checks.map(x=>`${x.pass?'OK':'ATENÇÃO'} — ${x.label}${x.details?' — '+x.details:''}`),'',report.ok?'Verificações concluídas sem alertas.':'Existem alertas; não restaure antes de investigar.','Este diagnóstico não substitui teste real em navegador separado.'].join('\n');}
export function renderBackupIntegrityButton(){return `<section aria-label="Diagnóstico de integridade"><h2 class="section-title">Verificação de backup e recuperação</h2><p>Testar compatibilidade dos backups sem modificar os dados.</p><button type="button" class="btn btn-secondary" data-backup-integrity="1">Executar diagnóstico de integridade</button></section>`;}
