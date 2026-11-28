/** INF-ESTUDO — Questões AUTORAIS publicadas na Fase D, sem importação de provas reais. */
import { INF_01_QUESTIONS } from "./informatica/inf-01-questions.js";
import { INF_02_QUESTIONS } from "./informatica/inf-02-questions.js";
import { INF_03_QUESTIONS } from "./informatica/inf-03-questions.js";
import { INF_04_QUESTIONS } from "./informatica/inf-04-questions.js";
import { INF_05_QUESTIONS } from "./informatica/inf-05-questions.js";
import { INF_06_QUESTIONS } from "./informatica/inf-06-questions.js";
import { INF_07_QUESTIONS } from "./informatica/inf-07-questions.js";
import { INF_08_QUESTIONS } from "./informatica/inf-08-questions.js";
import { INF_09_QUESTIONS } from "./informatica/inf-09-questions.js";
import { INF_10_QUESTIONS } from "./informatica/inf-10-questions.js";
import { INF_11_QUESTIONS } from "./informatica/inf-11-questions.js";
import { INF_12_QUESTIONS } from "./informatica/inf-12-questions.js";
import { INF_13_QUESTIONS } from "./informatica/inf-13-questions.js";
import { INF_14_QUESTIONS } from "./informatica/inf-14-questions.js";
import { INF_15_QUESTIONS } from "./informatica/inf-15-questions.js";
import { INF_16_QUESTIONS } from "./informatica/inf-16-questions.js";
import { INF_17_QUESTIONS } from "./informatica/inf-17-questions.js";
import { INF_18_QUESTIONS } from "./informatica/inf-18-questions.js";
import { INF_19_QUESTIONS } from "./informatica/inf-19-questions.js";
import { INF_20_QUESTIONS } from "./informatica/inf-20-questions.js";
export const QUESTIONS = Object.freeze([
  ...INF_01_QUESTIONS,
  ...INF_02_QUESTIONS,
  ...INF_03_QUESTIONS,
  ...INF_04_QUESTIONS,
  ...INF_05_QUESTIONS,
  ...INF_06_QUESTIONS,
  ...INF_07_QUESTIONS,
  ...INF_08_QUESTIONS,
  ...INF_09_QUESTIONS,
  ...INF_10_QUESTIONS,
  ...INF_11_QUESTIONS,
  ...INF_12_QUESTIONS,
  ...INF_13_QUESTIONS,
  ...INF_14_QUESTIONS,
  ...INF_15_QUESTIONS,
  ...INF_16_QUESTIONS,
  ...INF_17_QUESTIONS,
  ...INF_18_QUESTIONS,
  ...INF_19_QUESTIONS,
  ...INF_20_QUESTIONS
]);
export const questionsForModule = id => QUESTIONS.filter(q => q.moduleId === id);
