/** INF-ESTUDO D4 — catálogo e qualidade estrutural. Somente leitura; não usa progresso real. */
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {ALL_PLANNED_MODULES,MODULES,PENDING_MODULES,validateCatalog} from '../js/data/modules.js';
import {LESSONS,getLesson} from '../js/data/lessons.js';
import {DIAGNOSTICS,getDiagnosticCards} from '../js/data/diagnostics.js';
import {QUESTIONS,questionsForModule} from '../js/data/questions.js';
const ids=Array.from({length:5},(_,i)=>`INF-${String(i+16).padStart(2,'0')}`);
const topics=MODULES.filter(m=>ids.includes(m.id)).flatMap(m=>m.subtopics);
const qbank=QUESTIONS.filter(q=>ids.includes(q.moduleId));
const fields=['objective','introduction','concept','explanation','differences','example','examTip','commonMistakes','summary','reviewQuestion','reviewAnswer'];
const types=['ce','vf','afirmacoes','associacao','lacunas','classica','exceto'];
const ledger=JSON.parse(readFileSync(new URL('../docs/FASE_D_LOTE_4_GABARITOS_120.json',import.meta.url)));

test('27 módulos, 163 subtópicos; 20 disponíveis e 7 pendentes, pré-requisitos estáveis',()=>{
 assert.equal(ALL_PLANNED_MODULES.length,27);assert.equal(ALL_PLANNED_MODULES.reduce((n,m)=>n+m.subtopics.length,0),163);
 assert.equal(MODULES.length,20);assert.equal(PENDING_MODULES.length,7);assert.deepEqual(validateCatalog(),[]);
 assert.deepEqual(MODULES.slice(15).map(m=>m.id),ids);
 assert.equal(MODULES.filter(m=>ids.includes(m.id)).reduce((n,m)=>n+m.subtopics.length,0),30);
 assert.ok(PENDING_MODULES.every(x=>x.status==='em_preparacao'));
});
test('123 aulas no aplicativo; 30 novas, completas com 10 seções e recuperação ativa',()=>{
 assert.equal(Object.keys(LESSONS).length,123);
 for(const t of topics){const l=getLesson(t.id);assert.equal(l?.id,t.id);
  for(const key of fields)assert.ok(typeof l[key]==='string'&&l[key].length>80,`${t.id} ${key}`);
  assert.ok(l.explanation.length>2000,t.id);assert.ok(Object.values(l).join(' ').split(/\s+/).length>400,t.id);
  assert.notEqual(l.reviewQuestion,l.reviewAnswer);
 }
});
test('30 diagnósticos: um por subtópico, frente compreensiva e verso explicativo',()=>{
 assert.equal(Object.keys(DIAGNOSTICS).length,20);
 for(const id of ids){const m=MODULES.find(m=>m.id===id),cards=getDiagnosticCards(m);
  assert.equal(cards.length,6);assert.equal(DIAGNOSTICS[id].length,6);
  assert.equal(new Set(cards.map(c=>c.subtopicId)).size,6);
  for(const c of cards){assert.ok(c.question.length>100);assert.ok(c.answer.length>260);}
 }
});
test('492 questões acumuladas e 120 novas; IDs únicos e vinculados aos subtópicos corretos',()=>{
 assert.equal(QUESTIONS.length,492);assert.equal(qbank.length,120);
 assert.equal(new Set(QUESTIONS.map(q=>q.id)).size,492);
 for(const id of ids)assert.equal(questionsForModule(id).length,24);
 for(const t of topics){const qs=qbank.filter(q=>q.subtopicId===t.id);
  assert.equal(qs.length,4,t.id);
  assert.equal(qs.filter(q=>q.difficulty==='media').length,2,t.id);
  assert.equal(qs.filter(q=>q.difficulty==='dificil').length,2,t.id);
  assert.equal(qs.filter(q=>q.type==='ce'&&q.difficulty==='media').length,1,t.id);
 }
});
test('Sete tipos, classificação AUTORAL, comentários por alternativa e índices válidos',()=>{
 assert.deepEqual([...new Set(qbank.map(q=>q.type))].sort(),types.sort());
 for(const q of qbank){assert.equal(q.tipo,'AUTORAL');assert.equal(q.origem,'AUTORAL_INEDITA');
  assert.equal(q.moduleId,q.subtopicId.slice(0,6));assert.ok(q.id.startsWith(`Q-${q.subtopicId}-`));
  assert.ok(q.stem.length>100,q.id);assert.ok(q.options.length>=2&&q.options.length<=4,q.id);
  assert.equal(q.optionComments.length,q.options.length,q.id);
  assert.ok(q.optionComments.every(x=>x.length>65),q.id);
  assert.equal(new Set(q.options).size,q.options.length,q.id);
  assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length,q.id);
  for(const field of ['explanation','concept','trap','examTip','newExample','challenge'])assert.ok(q[field].length>85,`${q.id}: ${field}`);
  if(q.type==='ce')assert.deepEqual(q.options,['CERTO','ERRADO']);
 }
});
test('120 exemplos e desafios distintos, sem repetições entre os próprios itens',()=>{
 assert.equal(new Set(qbank.map(q=>q.newExample)).size,120);
 assert.equal(new Set(qbank.map(q=>q.challenge)).size,120);
 assert.equal(new Set(qbank.map(q=>q.stem)).size,120);
 for(const q of qbank){assert.notEqual(q.challenge,getLesson(q.subtopicId).reviewQuestion);assert.notEqual(q.newExample,getLesson(q.subtopicId).example);}
});
test('Relatório de 120 gabaritos preserva texto resolvido e ressalvas',()=>{
 assert.equal(ledger.length,120);
 const map=new Map(ledger.map(x=>[x.id,x]));assert.equal(map.size,120);
 for(const q of qbank){const item=map.get(q.id);assert.ok(item,q.id);
  assert.equal(item.gabaritoGravado,q.answer);
  assert.equal(item.textoGabaritoGravado,q.options[q.answer]);
  assert.equal(item.respostaDetermindaAntesDeOrdenarAlternativas,q.options[q.answer]);
  assert.match(item.ressalva,/externa independente/);
 }
});
test('Conteúdos INF-01 a INF-15 mantidos e não republicados como REAL',()=>{
 assert.equal(QUESTIONS.filter(q=>!ids.includes(q.moduleId)).length,372);
 assert.equal(Object.keys(LESSONS).filter(k=>!/^INF-(?:16|17|18|19|20)-/.test(k)).length,93);
 assert.ok(!qbank.some(q=>q.tipo==='REAL'));
});
