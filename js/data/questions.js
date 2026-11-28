/** INF-ESTUDO — Questões AUTORAIS publicadas na Fase D, sem importação de provas reais. */
import { INF_01_QUESTIONS } from "./informatica/inf-01-questions.js";
import { INF_02_QUESTIONS } from "./informatica/inf-02-questions.js";
import { INF_03_QUESTIONS } from "./informatica/inf-03-questions.js";
import { INF_04_QUESTIONS } from "./informatica/inf-04-questions.js";
import { INF_05_QUESTIONS } from "./informatica/inf-05-questions.js";
export const QUESTIONS = Object.freeze([
  ...INF_01_QUESTIONS,
  ...INF_02_QUESTIONS,
  ...INF_03_QUESTIONS,
  ...INF_04_QUESTIONS,
  ...INF_05_QUESTIONS
]);
export const questionsForModule = id => QUESTIONS.filter(q => q.moduleId === id);
