/** INF-ESTUDO — compatibilidade visual com títulos embutidos no motor legado.
 * Sem acesso a armazenamento. Mantém o caminho para não quebrar imports.
 */
const title = document.querySelector('title');
if (title) {
  let updating = false;
  const sync = () => {
    if (updating) return;
    const current = title.textContent;
    const next = current.replace(/(?:ADM-ESTUDO|PT-ESTUDO)/g, 'INF-ESTUDO');
    if (current === next) return;
    updating = true;
    title.textContent = next;
    updating = false;
  };
  new MutationObserver(sync).observe(title,{childList:true,subtree:true,characterData:true});
  sync();
}
