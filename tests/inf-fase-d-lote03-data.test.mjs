/** Lote 3 — validação de catálogo, objetos e qualidade estrutural; não usa localStorage real. */
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {ALL_PLANNED_MODULES,MODULES,PENDING_MODULES,validateCatalog} from '../js/data/modules.js';
import {LESSONS,getLesson} from '../js/data/lessons.js';
import {DIAGNOSTICS,getDiagnosticCards} from '../js/data/diagnostics.js';
import {QUESTIONS,questionsForModule} from '../js/data/questions.js';
const expected={"INF-11":6,"INF-12":6,"INF-13":5,"INF-14":6,"INF-15":6};
const ids=Object.keys(expected), topics=ids.flatMap(id=>MODULES.find(m=>m.id===id)?.subtopics||[]);
const topicIds=new Set(topics.map(x=>x.id)), bank=QUESTIONS.filter(q=>topicIds.has(q.subtopicId));
const required=['id','objective','introduction','concept','explanation','differences','example','examTip','commonMistakes','summary','reviewQuestion','reviewAnswer'];
const allowed=['ce','vf','afirmacoes','associacao','lacunas','classica','exceto'];
const ledger=JSON.parse(readFileSync(new URL('../docs/FASE_D_LOTE_3_GABARITOS_116.json',import.meta.url)));
const editorial=JSON.parse(readFileSync(new URL('../docs/FASE_D_LOTE_3_BASE_EDITORIAL.json',import.meta.url)));

test('Matriz original: 27 módulos e 163 subtópicos, 15 publicados, 12 pendentes',()=>{
 assert.equal(ALL_PLANNED_MODULES.length,27);
 assert.equal(ALL_PLANNED_MODULES.reduce((n,m)=>n+m.subtopics.length,0),163);
 assert.equal(MODULES.length,15);assert.equal(PENDING_MODULES.length,12);
 assert.deepEqual(MODULES.slice(10).map(m=>m.id),ids);
 assert.deepEqual(validateCatalog(),[]);
});
test('29 subtópicos e nenhuma substituição de ID anterior',()=>{
 assert.equal(topics.length,29);assert.equal(topicIds.size,29);
 assert.equal(MODULES.slice(0,10).reduce((n,m)=>n+m.subtopics.length,0),64);
 for(const mid of ids)assert.equal(MODULES.find(m=>m.id===mid).subtopics.length,expected[mid]);
});
test('93 aulas no catálogo: uma por subtópico publicado; todas as 29 novas completas',()=>{
 assert.equal(Object.keys(LESSONS).length,93);
 for(const t of topics){const l=getLesson(t.id);assert.ok(l,t.id);assert.equal(l.id,t.id);
  for(const k of required.filter(x=>x!=='id'))assert.ok(typeof l[k]==='string'&&l[k].length>55,`${t.id} ${k}`);
  assert.ok(l.explanation.length>1100,t.id);
  assert.ok(Object.values(l).join(' ').trim().split(/\s+/).length>=350,t.id);
  assert.notEqual(l.reviewQuestion,l.reviewAnswer);
 }
});
test('93 diagnósticos globais: frente e verso coerentes, uma pergunta por subtópico novo',()=>{
 assert.equal(Object.keys(DIAGNOSTICS).length,15);
 for(const mid of ids){const m=MODULES.find(x=>x.id===mid),cards=getDiagnosticCards(m);
  assert.equal(cards?.length,expected[mid]);assert.equal(new Set(cards.map(c=>c.subtopicId)).size,expected[mid]);
  for(const c of cards){assert.ok(c.question.length>100);assert.ok(c.answer.length>250);assert.ok(topicIds.has(c.subtopicId));}
 }
});
test('372 questões cumulativas, 116 novas e IDs globalmente únicos',()=>{
 assert.equal(QUESTIONS.length,372);assert.equal(bank.length,116);
 assert.equal(new Set(QUESTIONS.map(q=>q.id)).size,QUESTIONS.length);
 for(const mid of ids)assert.equal(questionsForModule(mid).length,expected[mid]*4);
});
test('Cada subtópico recebe duas médias, duas difíceis e média C/E fixa',()=>{
 for(const t of topics){const qs=bank.filter(q=>q.subtopicId===t.id);
  assert.equal(qs.length,4,t.id);
  assert.equal(qs.filter(q=>q.difficulty==='media').length,2,t.id);
  assert.equal(qs.filter(q=>q.difficulty==='dificil').length,2,t.id);
  assert.equal(qs.filter(q=>q.difficulty==='media'&&q.type==='ce').length,1,t.id);
  assert.equal(qs.filter(q=>q.difficulty==='media'&&q.type!=='ce').length,1,t.id);
 }
});
test('Todos os sete formatos reconhecidos sem tipo paralelo caso',()=>{
 assert.deepEqual([...new Set(bank.map(x=>x.type))].sort(),[...allowed].sort());
 assert.ok(!bank.some(x=>x.type==='caso'));
});
test('Campos, gabaritos, alternativas e comentários individualizados',()=>{
 for(const q of bank){
  assert.ok(allowed.includes(q.type),q.id);assert.equal(q.tipo,'AUTORAL');assert.equal(q.origem,'AUTORAL_INEDITA');
  assert.ok(q.id.startsWith('Q-'+q.subtopicId+'-'),q.id);assert.equal(q.moduleId,q.subtopicId.slice(0,6));
  assert.ok(q.stem.length>=75,q.id);assert.ok(q.options.length>=2&&q.options.length<=5,q.id);
  assert.equal(q.optionComments.length,q.options.length,q.id);
  assert.equal(new Set(q.options).size,q.options.length,q.id);
  assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length,q.id);
  assert.ok(q.optionComments.every(x=>x.length>75),q.id);
  for(const f of ['explanation','concept','trap','examTip','newExample','challenge'])assert.ok(q[f]?.length>55,`${q.id} ${f}`);
  if(q.type==='ce')assert.deepEqual(q.options,['CERTO','ERRADO']);
 }
});
test('116 exemplos e desafios distintos entre si e das recuperações ativas',()=>{
 assert.equal(new Set(bank.map(x=>x.newExample)).size,116);
 assert.equal(new Set(bank.map(x=>x.challenge)).size,116);
 for(const q of bank){assert.notEqual(q.newExample,LESSONS[q.subtopicId].example);assert.notEqual(q.challenge,LESSONS[q.subtopicId].reviewQuestion);}
});
test('Ledger presente para as 116 questões sem inventar origem REAL',()=>{
 assert.equal(ledger.length,116);assert.deepEqual(new Set(ledger.map(x=>x.id)),new Set(bank.map(x=>x.id)));
 for(const rec of ledger){const q=bank.find(x=>x.id===rec.id);
  assert.equal(rec.indiceGravado,q.answer);assert.equal(rec.alternativaGravada,q.options[q.answer]);
  assert.equal(rec.moduloId,undefined);assert.ok(rec.resolucaoPeloConteudo.length>55);
  assert.ok(rec.ressalva.includes('independente'));
 }
});
test('Bancos antigos não mudam de contagem nem de campos obrigatórios',()=>{
 assert.equal(QUESTIONS.filter(q=>/^INF-0[1-5]$/.test(q.moduleId)).length,124);
 assert.equal(QUESTIONS.filter(q=>/^INF-(?:0[6-9]|10)$/.test(q.moduleId)).length,132);
 assert.equal(Object.keys(LESSONS).filter(k=>/^INF-0[1-5]-/.test(k)).length,31);
 assert.equal(Object.keys(LESSONS).filter(k=>/^INF-(?:0[6-9]|10)-/.test(k)).length,33);
});
