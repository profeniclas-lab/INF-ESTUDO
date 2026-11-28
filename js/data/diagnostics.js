/** INF-ESTUDO — Diagnósticos dos módulos efetivamente publicados (um cartão por subtópico). */
import { INF_01_DIAGNOSTICS } from "./informatica/inf-01-diagnostics.js";
import { INF_02_DIAGNOSTICS } from "./informatica/inf-02-diagnostics.js";
import { INF_03_DIAGNOSTICS } from "./informatica/inf-03-diagnostics.js";
import { INF_04_DIAGNOSTICS } from "./informatica/inf-04-diagnostics.js";
import { INF_05_DIAGNOSTICS } from "./informatica/inf-05-diagnostics.js";
import { INF_06_DIAGNOSTICS } from "./informatica/inf-06-diagnostics.js";
import { INF_07_DIAGNOSTICS } from "./informatica/inf-07-diagnostics.js";
import { INF_08_DIAGNOSTICS } from "./informatica/inf-08-diagnostics.js";
import { INF_09_DIAGNOSTICS } from "./informatica/inf-09-diagnostics.js";
import { INF_10_DIAGNOSTICS } from "./informatica/inf-10-diagnostics.js";
export const DIAGNOSTICS = Object.freeze({
  ...INF_01_DIAGNOSTICS,
  ...INF_02_DIAGNOSTICS,
  ...INF_03_DIAGNOSTICS,
  ...INF_04_DIAGNOSTICS,
  ...INF_05_DIAGNOSTICS,
  ...INF_06_DIAGNOSTICS,
  ...INF_07_DIAGNOSTICS,
  ...INF_08_DIAGNOSTICS,
  ...INF_09_DIAGNOSTICS,
  ...INF_10_DIAGNOSTICS
});
export function getDiagnosticCards(module) {
  const entries = module && DIAGNOSTICS[module.id];
  if (!module || !Array.isArray(entries) || entries.length !== module.subtopics.length) return null;
  const byId = new Map(entries.map(item => [item.subtopicId,item]));
  if (byId.size !== module.subtopics.length || !module.subtopics.every(t => byId.has(t.id))) return null;
  return module.subtopics.map(t => ({
    id: `${t.id}-DIAG`, subtopicId: t.id, subtopicTitle: t.title,
    question: byId.get(t.id).front, answer: byId.get(t.id).back
  }));
}
