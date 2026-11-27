/** INF-ESTUDO — Fase C: nenhum diagnóstico publicado antes da revisão pedagógica. */
export const DIAGNOSTICS = Object.freeze({});
export function getDiagnosticCards(module) {
  const entries = module && DIAGNOSTICS[module.id];
  if (!module || !Array.isArray(entries) || entries.length !== module.subtopics.length) return null;
  const byId = new Map(entries.map(item => [item.subtopicId, item]));
  if (byId.size !== module.subtopics.length || !module.subtopics.every(t => byId.has(t.id))) return null;
  return module.subtopics.map(t => ({
    id: `${t.id}-DIAG`, subtopicId: t.id, subtopicTitle: t.title,
    question: byId.get(t.id).front, answer: byId.get(t.id).back
  }));
}
