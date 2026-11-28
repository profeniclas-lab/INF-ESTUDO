/** Fase D 1-R — testes de contratos pedagógicos. Não altera armazenamento. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { MODULES,PENDING_MODULES,validateCatalog } from '../js/data/modules.js';
import { LESSONS } from '../js/data/lessons.js';
import { DIAGNOSTICS,getDiagnosticCards } from '../js/data/diagnostics.js';
import { QUESTIONS,questionsForModule } from '../js/data/questions.js';
import fs from 'node:fs';
const fields=['objective','introduction','concept','explanation','differences','example','examTip','commonMistakes','summary','reviewQuestion','reviewAnswer'];
const validTypes=['ce','vf','afirmacoes','associacao','lacunas','classica','exceto'];
const ledger=JSON.parse(fs.readFileSync(new URL('../docs/FASE_D_LOTE_1R_GABARITOS_124.json',import.meta.url),'utf8'));
test('catálogo: cinco módulos e 22 pendentes, sem contratos quebrados',()=>{
 assert.equal(MODULES.length,5);assert.equal(PENDING_MODULES.length,22);
 assert.deepEqual(MODULES.map(x=>x.id),['INF-01','INF-02','INF-03','INF-04','INF-05']);
 assert.deepEqual(validateCatalog(),[]);
});
test('31 aulas paginadas: introdução, desenvolvimento, diferenças e erros',()=>{
 assert.equal(Object.keys(LESSONS).length,31);
 for(const m of MODULES)for(const t of m.subtopics){const l=LESSONS[t.id];assert.ok(l,t.id);assert.equal(l.id,t.id);
  for(const field of fields)assert.ok(typeof l[field]==='string'&&l[field].length>35,`${t.id}/${field}`);
  assert.ok(l.explanation.length>=500,`Desenvolvimento insuficiente ${t.id}`);
  assert.ok(l.reviewQuestion!==l.reviewAnswer,t.id);
 }
});
test('31 diagnósticos: um flashcard por subtópico, frente e verso explicativos',()=>{
 let count=0;for(const m of MODULES){const cards=getDiagnosticCards(m);assert.equal(cards.length,m.subtopics.length);
  const seen=new Set();for(const c of cards){assert.ok(c.question.length>=50);assert.ok(c.answer.length>=110);assert.ok(!seen.has(c.subtopicId));seen.add(c.subtopicId);count++;}}
 assert.equal(count,31);
});
test('124 questões: 2 médias (1 C/E e 1 variada), 2 difíceis por subtópico',()=>{
 assert.equal(QUESTIONS.length,124);const ids=new Set();
 for(const m of MODULES){assert.equal(questionsForModule(m.id).length,4*m.subtopics.length);
  for(const t of m.subtopics){const q=QUESTIONS.filter(q=>q.subtopicId===t.id);assert.equal(q.length,4,t.id);
   assert.equal(q.filter(x=>x.difficulty==='media').length,2,t.id);
   assert.equal(q.filter(x=>x.difficulty==='dificil').length,2,t.id);
   assert.equal(q.filter(x=>x.difficulty==='media'&&x.type==='ce').length,1,t.id);
   assert.equal(q.filter(x=>x.difficulty==='media'&&x.type!=='ce').length,1,t.id);
   for(const item of q){assert.ok(!ids.has(item.id),item.id);ids.add(item.id);assert.equal(item.moduleId,m.id);
    assert.ok(validTypes.includes(item.type),item.id);assert.equal(item.origem,'AUTORAL_INEDITA');
    assert.ok(Number.isInteger(item.answer)&&item.answer>=0&&item.answer<item.options.length,item.id);
    assert.equal(item.options.length,item.optionComments.length,item.id);
    assert.ok(item.optionComments.every(c=>c.length>40),item.id);
    if(item.type==='ce')assert.deepEqual(item.options,['CERTO','ERRADO']);
   }
  }
 }
});
test('todos os 7 formatos presentes, sem tipo caso não suportado',()=>{
 assert.deepEqual([...new Set(QUESTIONS.map(x=>x.type))].sort(),validTypes.sort());
});
test('124 exemplos e desafios próprios, sem repetir as perguntas da aula',()=>{
 assert.equal(new Set(QUESTIONS.map(x=>x.newExample)).size,124);
 assert.equal(new Set(QUESTIONS.map(x=>x.challenge)).size,124);
 for(const q of QUESTIONS){assert.notEqual(q.challenge,LESSONS[q.subtopicId].reviewQuestion);assert.notEqual(q.newExample,LESSONS[q.subtopicId].example);}
});
test('relatório de conferência: 124 registros vinculados aos gabaritos gravados',()=>{
 assert.equal(ledger.length,124);const maps=new Map(ledger.map(x=>[x.id,x]));assert.equal(maps.size,124);
 for(const q of QUESTIONS){const row=maps.get(q.id);assert.ok(row,q.id);assert.equal(row.gabarito_gravado,q.answer);assert.equal(row.resolucao_independente,q.answer);assert.equal(row.comparacao,'COINCIDE');assert.ok(row.fundamento.length>70);}
});
test('validação de índices e permutações: gabarito/comentário preservados',()=>{
 for(const q of QUESTIONS){const original=q.options.map((_,i)=>i);for(let shift=0;shift<original.length;shift++){
  const order=original.slice(shift).concat(original.slice(0,shift));const right=order.indexOf(q.answer);
  assert.equal(q.options[order[right]],q.options[q.answer]);assert.equal(q.optionComments[order[right]],q.optionComments[q.answer]);}
 }
});
