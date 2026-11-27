/** INF-ESTUDO — orientações de backup manual no Google Drive. */
export const GOOGLE_DRIVE_URL = 'https://drive.google.com/drive/u/0/my-drive';
export function renderDriveBackupGuide() {
  return `<section class="card" aria-label="Backup no Google Drive" style="margin:16px 0;padding:16px">
    <h2 class="section-title">Guardar backup no Google Drive</h2>
    <p>O progresso de Informática fica salvo neste navegador. Para evitar perdas, guarde uma cópia JSON em sua conta Google Drive.</p>
    <ol>
      <li>Clique em <strong>Exportar backup do progresso (.json)</strong> e confirme que o arquivo foi baixado.</li>
      <li>Abra o Google Drive e entre na conta desejada.</li>
      <li>Selecione <strong>Novo → Upload de arquivo</strong> e escolha o JSON recém-baixado.</li>
      <li>Confira se o arquivo aparece na pasta e repita após sessões importantes.</li>
    </ol>
    <p><a class="btn btn-secondary" href="${GOOGLE_DRIVE_URL}" target="_blank" rel="noopener noreferrer">Abrir meu Google Drive</a></p>
    <p class="page-subtitle">O envio manual não acontece automaticamente. O INF-ESTUDO também possui botões de backup direto em Configurações. Mantenha seu histórico privado.</p>
    <details><summary>Como recuperar em outro dispositivo?</summary><p>Baixe o JSON do INF-ESTUDO no outro dispositivo e use Verificar backup e Restaurar. Backups de Português e Administração são recusados; a restauração substitui o progresso local.</p></details>
  </section>`;
}
