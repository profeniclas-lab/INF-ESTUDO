/** Fase D — Lote 2. Auditoria estrutural do conteúdo; somente leitura. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { ALL_PLANNED_MODULES, MODULES, PENDING_MODULES, validateCatalog } from '../js/data/modules.js';
import { LESSONS } from '../js/data/lessons.js';
import { DIAGNOSTICS, getDiagnosticCards } from '../js/data/diagnostics.js';
import { QUESTIONS, questionsForModule } from '../js/data/questions.js';
const IDS=['INF-06','INF-07','INF-08','INF-09','INF-10'];
const expected={ 'INF-06':5,'INF-07':6,'INF-08':7,'INF-09':7,'INF-10':8};
const topicIds=new Set(IDS.flatMap(mid=>MODULES.find(m=>m.id===mid)?.subtopics.map(t=>t.id)||[]));
const L2=QUESTIONS.filter(q=>topicIds.has(q.subtopicId));
const types=['ce','vf','afirmacoes','associacao','lacunas','classica','exceto'];
const fields=['id','objective','introduction','concept','explanation','differences','example','examTip','commonMistakes','summary','reviewQuestion','reviewAnswer'];
const ledger=JSON.parse(readFileSync(new URL('../docs/FASE_D_LOTE_2_GABARITOS_132.json',import.meta.url),'utf8'));
test('matriz: 27 módulos previstos, 10 disponíveis, 17 pendentes; pré-requisitos preservados',()=>{
 assert.equal(ALL_PLANNED_MODULES.length,27);assert.equal(MODULES.length,10);assert.equal(PENDING_MODULES.length,17);
 assert.deepEqual(MODULES.slice(5).map(m=>m.id),IDS);assert.deepEqual(validateCatalog(),[]);
 assert.equal(ALL_PLANNED_MODULES.reduce((s,m)=>s+m.subtopics.length,0),163);
});
test('33 subtópicos e exatamente uma aula por subtópico publicado no Lote 2',()=>{
 assert.equal(topicIds.size,33);assert.equal(Object.keys(LESSONS).length,64);
 for(const mid of IDS){const mod=MODULES.find(m=>m.id===mid);assert.equal(mod.subtopics.length,expected[mid]);
  for(const t of mod.subtopics){const l=LESSONS[t.id];assert.ok(l,t.id);assert.equal(l.id,t.id);
   for(const f of fields.filter(f=>f!=='id'))assert.ok(typeof l[f]==='string'&&l[f].length>45,`${t.id}:${f}`);
   assert.ok(l.explanation.length>900,`aula teórica breve: ${t.id}`);
   const words=Object.values(l).join(' ').split(/\s+/).length;assert.ok(words>=350,`aula curta: ${t.id} = ${words}`);
  }
 }
});
test('33 diagnósticos com frente e verso vinculados e sem pergunta de mera sigla',()=>{
 let count=0;for(const mid of IDS){const m=MODULES.find(x=>x.id===mid),cards=getDiagnosticCards(m);
  assert.equal(cards.length,expected[mid]);assert.equal(DIAGNOSTICS[mid].length,expected[mid]);
  for(const c of cards){assert.ok(c.question.length>70&&c.answer.length>180);assert.ok(topicIds.has(c.subtopicId));count++;}
 }
 assert.equal(count,33);
});
test('132 questões: duas médias (uma C/E), duas difíceis, por subtópico',()=>{
 assert.equal(L2.length,132);assert.equal(QUESTIONS.length,256);
 for(const tid of topicIds){const qs=L2.filter(q=>q.subtopicId===tid);assert.equal(qs.length,4,tid);
  assert.equal(qs.filter(q=>q.difficulty==='media').length,2,tid);
  assert.equal(qs.filter(q=>q.difficulty==='dificil').length,2,tid);
  assert.equal(qs.filter(q=>q.type==='ce'&&q.difficulty==='media').length,1,tid);
  assert.equal(qs.filter(q=>q.type!=='ce'&&q.difficulty==='media').length,1,tid);
 }
});
test('questões sem duplicação de IDs; campos, opções e comentários válidos',()=>{
 assert.equal(new Set(QUESTIONS.map(x=>x.id)).size,256);
 for(const q of L2){assert.ok(types.includes(q.type),q.id);assert.ok(q.id.startsWith(`Q-${q.subtopicId}-`));
  assert.equal(q.moduleId,q.subtopicId.slice(0,6));assert.equal(q.tipo,'AUTORAL');assert.equal(q.origem,'AUTORAL_INEDITA');
  assert.ok(q.stem.length>=90,q.id);assert.ok(q.options.length>=2&&q.options.length<=5,q.id);
  assert.equal(q.options.length,q.optionComments.length,q.id);
  assert.ok(q.options.every(x=>x.length>=3));assert.ok(q.optionComments.every(x=>x.length>=45),q.id);
  assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length,q.id);
  for(const field of ['explanation','concept','trap','examTip','newExample','challenge'])assert.ok(q[field]?.length>45,`${q.id} / ${field}`);
  if(q.type==='ce')assert.deepEqual(q.options,['CERTO','ERRADO']);
 }
});
test('sete formatos efetivamente presentes e associados a questões válidas',()=>{
 assert.deepEqual([...new Set(L2.map(q=>q.type))].sort(),types.slice().sort());
});
test('132 exemplos e desafios exclusivos; distintos dos exercícios de recuperação das aulas',()=>{
 assert.equal(new Set(L2.map(q=>q.newExample)).size,132);assert.equal(new Set(L2.map(q=>q.challenge)).size,132);
 for(const q of L2){assert.notEqual(q.challenge,LESSONS[q.subtopicId].reviewQuestion);assert.notEqual(q.newExample,LESSONS[q.subtopicId].example);}
});
test('invariância da permutação: índice original e comentário acompanham a alternativa',()=>{
 for(const q of L2){const n=q.options.length;for(let shift=0;shift<n;shift++){
  const order=Array.from({length:n},(_,i)=>(i+shift)%n);const shown=order.indexOf(q.answer);
  assert.equal(q.options[order[shown]],q.options[q.answer]);assert.equal(q.optionComments[order[shown]],q.optionComments[q.answer]);
 }}
});
test('registro individual para cada questão e origem autoral identificada',()=>{
 assert.equal(ledger.length,132);const ids=new Set();for(const item of ledger){assert.ok(!ids.has(item.id));ids.add(item.id);
  const q=L2.find(x=>x.id===item.id);assert.ok(q,item.id);assert.equal(item.gabarito_gravado,q.answer);
  assert.equal(item.resposta_textual,q.options[q.answer]);assert.ok(item.fundamento.length>65);
 }
});
test('preserva as 124 questões e as 31 aulas existentes da Fase D 1-R',()=>{
 assert.equal(QUESTIONS.filter(q=>/^Q-INF-0[1-5]-/.test(q.id)).length,124);
 assert.equal(Object.keys(LESSONS).filter(k=>/^INF-0[1-5]-/.test(k)).length,31);
});
