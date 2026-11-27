/** INF-ESTUDO — Fase C: banco vazio, sem importação de questões de outros aplicativos.
 * O contrato de questão (id, moduleId, options, answer, difficulty) fica preservado.
 */
export const QUESTIONS = Object.freeze([]);
export const questionsForModule = id => QUESTIONS.filter(q => q.moduleId === id);
