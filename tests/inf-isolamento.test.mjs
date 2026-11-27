import assert from 'node:assert/strict';
import test from 'node:test';
import { createInitialState, APP_ID } from '../js/core/state.js';
import { STORAGE_KEY } from '../js/core/storage.js';
import { inspectProgressIdentity } from '../js/core/progress-identity.js';
import { validateProgressBackup, BACKUP_FORMAT } from '../js/core/progress-backup-validator.js';
import { inspectStoredProgress, validateStateForSaving } from '../js/core/storage-safety.js';
import { DRIVE_OAUTH_CONFIG } from '../js/config/google-drive-oauth.js';
const envelope = state => ({format:BACKUP_FORMAT,backupVersion:1,createdAt:new Date().toISOString(),storageKey:STORAGE_KEY,schemaVersion:3,state});
const mock = seed => ({getItem:k=>Object.prototype.hasOwnProperty.call(seed,k)?seed[k]:null});
test('identidade e chaves exclusivas', () => {
  assert.equal(APP_ID,'inf-estudo');
  assert.equal(STORAGE_KEY,'infEstudo.v1.state');
  assert.equal(BACKUP_FORMAT,'inf-estudo-progress-backup');
  assert.equal(DRIVE_OAUTH_CONFIG.folderName,'INF-ESTUDO');
  assert.equal(DRIVE_OAUTH_CONFIG.fileName,'INF-ESTUDO-progresso.json');
});
test('rejeita backups de Português e Administração', () => {
  const state = createInitialState();
  for(const app of ['pt-estudo','adm-estudo']) {
    assert.equal(validateProgressBackup(envelope({...state,appId:app})).valid,false);
  }
  assert.equal(validateProgressBackup({...envelope(state),format:'pt-estudo-progress-backup'}).valid,false);
  assert.equal(validateProgressBackup({...envelope(state),storageKey:'admEstudo.v2.state'}).valid,false);
});
test('rejeita IDs estranhos mesmo em estado com appId falsificado', () => {
  for(const id of ['POR-01','RED-03','ADM-01','DA-10','AP-01']) {
    const s=createInitialState();s.progress.modules[id]={started:true};
    assert.equal(inspectProgressIdentity(s).ok,false,id);
    assert.equal(validateStateForSaving(s),false,id);
  }
  const s=createInitialState();s.progress.questionHistory['Q-REAL-POR-01-002']={attempts:[]};
  assert.equal(validateProgressBackup(envelope(s)).valid,false);
});
test('aceita estado vazio ou com IDs de informática', () => {
  const s=createInitialState();s.progress.modules['INF-01']={started:true};
  assert.equal(validateStateForSaving(s),true);
  assert.equal(validateProgressBackup(envelope(s)).valid,true);
  assert.equal(inspectStoredProgress(mock({[STORAGE_KEY]:JSON.stringify(s)})).ok,true);
});
test('não lê chaves alheias no mecanismo de validação',()=>{
  const touched=[];
  const storage={getItem(k){touched.push(k);if(k!==STORAGE_KEY)throw new Error('leitura proibida');return null;}};
  assert.equal(inspectStoredProgress(storage).ok,true);
  assert.deepEqual(touched,[STORAGE_KEY]);
});
