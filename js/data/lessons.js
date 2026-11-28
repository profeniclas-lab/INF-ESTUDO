/** INF-ESTUDO — Aulas de Informática publicadas na Fase D. */
import { INF_01_LESSONS } from "./informatica/inf-01-lessons.js";
import { INF_02_LESSONS } from "./informatica/inf-02-lessons.js";
import { INF_03_LESSONS } from "./informatica/inf-03-lessons.js";
import { INF_04_LESSONS } from "./informatica/inf-04-lessons.js";
import { INF_05_LESSONS } from "./informatica/inf-05-lessons.js";
export const LESSONS = Object.freeze({
  ...INF_01_LESSONS,
  ...INF_02_LESSONS,
  ...INF_03_LESSONS,
  ...INF_04_LESSONS,
  ...INF_05_LESSONS
});
export const getLesson = id => LESSONS[id] || null;
