/** INF-ESTUDO — exportação local do progresso exclusivo desta aplicação. */
import { STORAGE_KEY } from './storage.js';
import { inspectStoredProgress } from './storage-safety.js';
import { BACKUP_FORMAT, validateProgressBackup } from './progress-backup-validator.js';

export function exportProgressBackup() {
  const inspected = inspectStoredProgress();
  if (!inspected.ok) return {ok:false,message:'Backup bloqueado: '+inspected.message};
  if (inspected.code === 'empty') return {ok:false,message:'Ainda não há progresso salvo para exportar.'};
  const raw = window.localStorage.getItem(STORAGE_KEY);
  let state; try { state = JSON.parse(raw); } catch { return {ok:false,message:'Estado local inválido.'}; }
  const createdAt = new Date().toISOString();
  const backup = {format:BACKUP_FORMAT,backupVersion:1,createdAt,storageKey:STORAGE_KEY,schemaVersion:state.schemaVersion,state};
  const validated = validateProgressBackup(backup);
  if (!validated.valid) return {ok:false,message:'O progresso não passou na verificação: '+validated.errors.join(' ')};
  const blob = new Blob([JSON.stringify(backup,null,2)],{type:'application/json;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `inf-estudo-backup-${createdAt.slice(0,10)}-${createdAt.slice(11,19).replace(/:/g,'-')}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
  return {ok:true,message:'Download do backup solicitado. Confirme que o arquivo foi salvo no dispositivo.'};
}
