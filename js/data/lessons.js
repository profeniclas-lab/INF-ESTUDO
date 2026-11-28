/** INF-ESTUDO — Aulas de Informática publicadas na Fase D. */
import { INF_01_LESSONS } from "./informatica/inf-01-lessons.js";
import { INF_02_LESSONS } from "./informatica/inf-02-lessons.js";
import { INF_03_LESSONS } from "./informatica/inf-03-lessons.js";
import { INF_04_LESSONS } from "./informatica/inf-04-lessons.js";
import { INF_05_LESSONS } from "./informatica/inf-05-lessons.js";
import { INF_06_LESSONS } from "./informatica/inf-06-lessons.js";
import { INF_07_LESSONS } from "./informatica/inf-07-lessons.js";
import { INF_08_LESSONS } from "./informatica/inf-08-lessons.js";
import { INF_09_LESSONS } from "./informatica/inf-09-lessons.js";
import { INF_10_LESSONS } from "./informatica/inf-10-lessons.js";
export const LESSONS = Object.freeze({
  ...INF_01_LESSONS,
  ...INF_02_LESSONS,
  ...INF_03_LESSONS,
  ...INF_04_LESSONS,
  ...INF_05_LESSONS,
  ...INF_06_LESSONS,
  ...INF_07_LESSONS,
  ...INF_08_LESSONS,
  ...INF_09_LESSONS,
  ...INF_10_LESSONS
});
export const getLesson = id => LESSONS[id] || null;
