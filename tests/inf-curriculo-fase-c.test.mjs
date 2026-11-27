import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import {
  AREAS, ALL_PLANNED_MODULES, MODULES, PENDING_MODULES,
  getModuleById, getSubtopicById, validateCatalog
} from '../js/data/modules.js';
import { DIAGNOSTICS, getDiagnosticCards } from '../js/data/diagnostics.js';
import { LESSONS, getLesson } from '../js/data/lessons.js';
import { QUESTIONS, questionsForModule } from '../js/data/questions.js';
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = path => readFileSync(resolve(ROOT, path),'utf8');
const catalog = JSON.parse(read('docs/INF_CURRICULO_FASE_C.json'));

test('Identidade curricular somente INF', () => {
  assert.deepEqual(AREAS,{INF:'Informática'});
  assert.equal(ALL_PLANNED_MODULES.length,27);
  assert.equal(catalog.totalModulos,27);
  assert.deepEqual(validateCatalog(),[]);
});
test('IDs estáveis e exclusivos de módulos e subtópicos', () => {
  const ids = new Set();
  for (let i=0;i<ALL_PLANNED_MODULES.length;i++) {
    const m=ALL_PLANNED_MODULES[i];
    assert.equal(m.id,`INF-${String(i+1).padStart(2,'0')}`);
    assert.equal(m.area,'INF');
    assert.equal(ids.has(m.id),false); ids.add(m.id);
    for(let j=0;j<m.subtopics.length;j++){
      const t=m.subtopics[j];
      assert.equal(t.id,`${m.id}-${String(j+1).padStart(3,'0')}`);
      assert.equal(ids.has(t.id),false); ids.add(t.id);
      assert.ok(t.title.length>10);
    }
  }
  assert.equal(ids.size,27+163);
  assert.equal(catalog.totalSubtopicos,163);
});
test('Pré-requisitos existentes e não circulares', () => {
  const ids=new Set(ALL_PLANNED_MODULES.map(m=>m.id));
  for(const m of ALL_PLANNED_MODULES)
    for(const p of m.prerequisites) assert.ok(ids.has(p)&&p!==m.id);
  assert.deepEqual(validateCatalog(),[]);
});
test('Nenhum conteúdo de Português é importado pelos adaptadores ativos', () => {
  for(const p of ['js/data/modules.js','js/data/diagnostics.js','js/data/lessons.js','js/data/questions.js']) {
    const s=read(p);
    assert.doesNotMatch(s,/from\s*['"]\.\/portugues\//);
    assert.doesNotMatch(s,/\b(?:POR|RED)-\d{2}\b/);
  }
});
test('Conteúdo não auditado não é publicado prematuramente', () => {
  assert.equal(MODULES.length,0);
  assert.equal(PENDING_MODULES.length,27);
  assert.ok(PENDING_MODULES.every(m=>m.status==='em_preparacao'));
  assert.equal(getModuleById('INF-01'),null);
  assert.equal(getSubtopicById('INF-01-001'),null);
});
test('Contratos de dados são preservados para publicação futura',()=>{
  assert.deepEqual(Object.keys(DIAGNOSTICS),[]);
  assert.deepEqual(Object.keys(LESSONS),[]);
  assert.deepEqual(QUESTIONS,[]);
  assert.equal(getDiagnosticCards(ALL_PLANNED_MODULES[0]),null);
  assert.equal(getLesson('INF-01-001'),null);
  assert.deepEqual(questionsForModule('INF-01'),[]);
});
test('Catálogo JSON documental coincide com o catálogo ES Modules',()=>{
  assert.deepEqual(catalog.modulos,ALL_PLANNED_MODULES);
});
test('Módulos de informática priorizam assuntos de prova de nível médio',()=>{
  for(const n of [4,5,7,9,10,14,15,16,18,19,20,21])
    assert.ok(ALL_PLANNED_MODULES[n-1].subtopics.length>=5);
});
test('Interface mostra número dinâmico e não abre módulos pendentes',()=>{
  const s=read('js/features/modules.js');
  assert.match(s,/ALL_PLANNED_MODULES\.length/);
  assert.match(s,/PENDING_MODULES\.filter/);
  assert.match(s,/Em preparação/);
  assert.doesNotMatch(s,/27 módulos planejados/);
  assert.match(s,/data-module-id/);
});
test('Estrutura do pacote não altera identidade do INF-ESTUDO',()=>{
  for(const p of ['js/data/modules.js','js/data/diagnostics.js','js/data/lessons.js','js/data/questions.js','js/features/modules.js']){
    const s=read(p);
    assert.doesNotMatch(s,/localStorage\s*\.|admEstudo\.v2\.state|ptEstudo\.v1\.state/);
  }
});
