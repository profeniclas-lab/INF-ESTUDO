/** Testes automáticos da Fase B, Lote 2 — sem login nem chamadas reais ao Drive. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState } from '../js/core/state.js';
import { STORAGE_KEY, loadState, saveState } from '../js/core/storage.js';
import { DRIVE_OAUTH_CONFIG } from '../js/config/google-drive-oauth.js';
import { BACKUP_FORMAT, validateProgressBackup } from '../js/core/progress-backup-validator.js';
import { assertDriveDestination, assertRemoteFile, buildDriveBackup, samePedagogicalProgress, renderDriveBackupPanel } from '../js/core/google-drive-backup.js';
import { prepareProgressRestore } from '../js/core/progress-restore.js';
import { runBackupIntegrityChecks } from '../js/core/backup-integrity-tests.js';
import { runPersistenceDiagnostics } from '../js/core/persistence-diagnostics.js';
import { runStorageRoundtripTests } from '../js/core/storage-roundtrip-tests.js';

const wrap = state => ({format:BACKUP_FORMAT,backupVersion:1,createdAt:'2026-11-27T12:00:00.000Z',storageKey:STORAGE_KEY,schemaVersion:state.schemaVersion,state});
function localStorage(seed={}) {
  const map=new Map(Object.entries(seed)),calls=[];
  return {
    calls,getItem(k){calls.push(['get',k]);return map.has(k)?map.get(k):null;},
    setItem(k,v){calls.push(['set',k]);map.set(k,String(v));},
    removeItem(k){calls.push(['remove',k]);map.delete(k);},
    all:()=>Object.fromEntries(map)
  };
}

test('Drive recusa configuração com pasta ou arquivo de outro aplicativo',()=>{
  assert.equal(assertDriveDestination(),true);
  assert.throws(()=>assertDriveDestination({...DRIVE_OAUTH_CONFIG,folderName:'PT-ESTUDO'}));
  assert.throws(()=>assertDriveDestination({...DRIVE_OAUTH_CONFIG,fileName:'PT-ESTUDO-progresso.json'}));
  assert.throws(()=>assertDriveDestination({...DRIVE_OAUTH_CONFIG,folderName:'ADM-ESTUDO'}));
});
test('Drive recusa ID, pasta, nome, MIME ou appProperties incompatíveis',()=>{
  const good={id:'id-inf',name:'INF-ESTUDO-progresso.json',mimeType:'application/json',parents:['folder-inf'],appProperties:{appId:'inf-estudo'}};
  assert.equal(assertRemoteFile(good,'folder-inf'),good);
  for(const changes of [{name:'PT-ESTUDO-progresso.json'},{mimeType:'text/plain'},{parents:['folder-pt']},{appProperties:{appId:'pt-estudo'}},{id:null}])
    assert.throws(()=>assertRemoteFile({...good,...changes},'folder-inf'));
});
test('constrói backup INF e rejeita estados e históricos estranhos',()=>{
  const state=createInitialState();state.progress.modules['INF-01']={started:true};
  const b=buildDriveBackup(JSON.stringify(state),new Date('2026-11-27T12:00:00.000Z'));
  assert.equal(b.payload.format,BACKUP_FORMAT);
  assert.equal(b.payload.storageKey,STORAGE_KEY);
  assert.equal(b.payload.state.appId,'inf-estudo');
  assert.equal(validateProgressBackup(b.payload).valid,true);
  assert.equal(samePedagogicalProgress(b.payload,JSON.parse(b.serialized)),true);
  assert.equal(samePedagogicalProgress({...b.payload,storageKey:'ptEstudo.v1.state'},b.payload),false);
  for(const appId of ['pt-estudo','adm-estudo','dir-adm'])assert.throws(()=>buildDriveBackup(JSON.stringify({...state,appId})));
  for(const id of ['POR-01','RED-03','ADM-01']){
    const bad=structuredClone(state);bad.progress.modules[id]={started:true};
    assert.throws(()=>buildDriveBackup(JSON.stringify(bad)));
  }
});
test('interface do Drive cita só o destino INF',()=>{
  const panel=renderDriveBackupPanel();
  assert.match(panel,/INF-ESTUDO/);
  assert.match(panel,/INF-ESTUDO-progresso\.json/);
  assert.doesNotMatch(panel,/PT-ESTUDO|ADM-ESTUDO/);
});
test('restauração de JSON dos outros aplicativos é recusada antes da escrita',async()=>{
  const state=createInitialState();
  for(const format of ['pt-estudo-progress-backup','adm-estudo-progress-backup']){
    const raw=JSON.stringify({...wrap(state),format});
    const result=await prepareProgressRestore({name:'backup.json',size:raw.length,text:async()=>raw});
    assert.equal(result.ok,false);
  }
  const raw=JSON.stringify(wrap(state));
  const result=await prepareProgressRestore({name:'backup.json',size:raw.length,text:async()=>raw});
  assert.equal(result.ok,true);
});
test('salvamento local lê e grava exclusivamente a própria chave',()=>{
  const oldWindow=globalThis.window;
  const foreign={'ptEstudo.v1.state':'PT-VALOR-SENTINELA','admEstudo.v2.state':'ADM-VALOR-SENTINELA','admDireitoAdm.state':'ADM-ANTIGO'};
  const storage=localStorage(foreign);
  globalThis.window={localStorage:storage,addEventListener(){}};
  try{
    const state=loadState();
    assert.equal(saveState(state).ok,true);
    assert.equal(storage.all()['ptEstudo.v1.state'],foreign['ptEstudo.v1.state']);
    assert.equal(storage.all()['admEstudo.v2.state'],foreign['admEstudo.v2.state']);
    assert.equal(storage.all()['admDireitoAdm.state'],foreign['admDireitoAdm.state']);
    assert.ok(storage.calls.every(([,key])=>key===STORAGE_KEY));
  }finally{globalThis.window=oldWindow;}
});
test('diagnósticos internos agora aprovam apenas referências INF',()=>{
  const s=createInitialState(),store=localStorage({[STORAGE_KEY]:JSON.stringify(s),'ptEstudo.v1.state':'SENTINELA'});
  const reports=[runBackupIntegrityChecks(store),runPersistenceDiagnostics(store),runStorageRoundtripTests(store)];
  for(const report of reports){assert.equal(report.ok,true,JSON.stringify(report.checks.filter(c=>!(c.pass??c.passed))));assert.ok(report.checks.length>=10);}
  assert.equal(store.all()['ptEstudo.v1.state'],'SENTINELA');
  assert.ok(store.calls.every(([,key])=>key===STORAGE_KEY||key===`${STORAGE_KEY}.preRestoreRecovery`));
});
