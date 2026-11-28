/** Contrato curricular da Fase C após publicação gradual da Fase D. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { AREAS, ALL_PLANNED_MODULES, MODULES, PENDING_MODULES, getModuleById, getSubtopicById, validateCatalog } from '../js/data/modules.js';
import { DIAGNOSTICS, getDiagnosticCards } from '../js/data/diagnostics.js';
import { LESSONS, getLesson } from '../js/data/lessons.js';
import { QUESTIONS, questionsForModule } from '../js/data/questions.js';
const ROOT=resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read=p=>readFileSync(resolve(ROOT,p),'utf8');
const curriculum=JSON.parse(read('docs/INF_CURRICULO_FASE_C.json'));

test('Identidade curricular: Informática, 27 módulos e 163 subtópicos',()=>{
 assert.deepEqual(AREAS,{INF:'Informática'});
 assert.equal(ALL_PLANNED_MODULES.length,27);
 assert.equal(ALL_PLANNED_MODULES.reduce((n,m)=>n+m.subtopics.length,0),163);
 assert.deepEqual(validateCatalog(),[]);
 assert.equal(curriculum.totalModulos,27);
 assert.equal(curriculum.totalSubtopicos,163);
});
test('IDs estáveis e únicos; plano curricular original preservado',()=>{
 const original=curriculum.modulos;const unique=new Set();
 for(let i=0;i<original.length;i++){
  const current=ALL_PLANNED_MODULES[i], planned=original[i];
  assert.equal(current.id,`INF-${String(i+1).padStart(2,'0')}`);
  assert.deepEqual({...current,status:planned.status},planned);
  for(let j=0;j<current.subtopics.length;j++){
   const t=current.subtopics[j];assert.equal(t.id,`${current.id}-${String(j+1).padStart(3,'0')}`);
   assert.equal(unique.has(t.id),false);unique.add(t.id);
  }
 }
 assert.equal(unique.size,163);
});
test('Publicação gradual: primeiros 15 disponíveis; demais 12 pendentes',()=>{
 assert.deepEqual(MODULES.map(m=>m.id),['INF-01','INF-02','INF-03','INF-04','INF-05','INF-06','INF-07','INF-08','INF-09','INF-10','INF-11','INF-12','INF-13','INF-14','INF-15']);
 assert.equal(PENDING_MODULES.length,12);
 assert.ok(PENDING_MODULES.every(m=>m.status==='em_preparacao'));
 assert.ok(getModuleById('INF-05'));
 assert.ok(getModuleById('INF-06'));assert.ok(getModuleById('INF-11'));
 assert.ok(getSubtopicById('INF-01-001'));
 assert.ok(getSubtopicById('INF-06-001'));assert.ok(getSubtopicById('INF-11-001'));
});
test('Importações pedagógicas não acessam conteúdo PT ou ADM',()=>{
 for(const p of ['js/data/modules.js','js/data/diagnostics.js','js/data/lessons.js','js/data/questions.js']){
  const s=read(p);assert.doesNotMatch(s,/from\s*['"]\.\/portugues\//);
  assert.doesNotMatch(s,/\b(?:POR|RED|ADM|DA|AP)-\d{2}\b/);
  assert.doesNotMatch(s,/localStorage\s*\.|ptEstudo\.v1\.state|admEstudo\.v2\.state/);
 }
});
test('27 módulos e pré-requisitos sem ciclos',()=>{
 const ids=new Set(ALL_PLANNED_MODULES.map(m=>m.id));
 for(const module of ALL_PLANNED_MODULES)
  for(const p of module.prerequisites)assert.ok(ids.has(p)&&p!==module.id);
 assert.deepEqual(validateCatalog(),[]);
});
test('Contratos disponibilizam materiais somente dos módulos publicados',()=>{
 assert.deepEqual(Object.keys(DIAGNOSTICS).sort(),MODULES.map(m=>m.id).sort());
 assert.equal(Object.keys(LESSONS).length,93);
 assert.equal(QUESTIONS.length,372);
 for(const module of MODULES){
  assert.equal(getDiagnosticCards(module)?.length,module.subtopics.length);
  for(const topic of module.subtopics)assert.ok(getLesson(topic.id));
  assert.equal(questionsForModule(module.id).length,module.subtopics.length*4);
 }
 assert.equal(getDiagnosticCards(PENDING_MODULES[0]),null);
 assert.equal(questionsForModule('INF-16').length,0);
});
test('Interface lista disponibilidade de modo dinâmico',()=>{
 const src=read('js/features/modules.js');
 assert.match(src,/ALL_PLANNED_MODULES\.length/);assert.match(src,/PENDING_MODULES\.filter/);
 assert.match(src,/Em preparação/);assert.match(src,/data-module-id/);
});
