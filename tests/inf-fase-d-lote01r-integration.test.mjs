/** Fase D 1-R — testes de integração executáveis no repositório INF-ESTUDO completo.
 * Não grava no localStorage real; usa estado temporário em memória.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { MODULES } from '../js/data/modules.js';
import { QUESTIONS,questionsForModule } from '../js/data/questions.js';
import { createInitialState } from '../js/core/state.js';
import { createExerciseSession,exerciseSummary,answerExercise,assessExercise,nextExercise } from '../js/features/exercises.js';
import { updateBankFilter,resetBankFilters,startBankSession,answerBankQuestion,nextBankQuestion,closeBankSession,renderQuestionBank } from '../js/features/banco-questoes.js';
import { renderLesson,saveLessonProgress,lessonStats } from '../js/features/lessons.js';
import { renderModuleDetail } from '../js/features/module-detail.js';
const mockMain=()=>({innerHTML:''});
for(const m of MODULES){
 test(`${m.id}: sessão inclui TODAS as médias + 6 difíceis sem duplicação`,()=>{
  const s=createInitialState();assert.equal(createExerciseSession(s,m.id),true);
  const session=s.progress.exercises[m.id];const questions=questionsForModule(m.id);
  const ids=new Set(session.ids);
  assert.equal(ids.size,session.ids.length);
  assert.equal(session.ids.length,2*m.subtopics.length+6);
  const expectedMedium=questions.filter(q=>q.difficulty==='media').map(q=>q.id);
  for(const id of expectedMedium)assert.ok(ids.has(id),id);
  const chosenHard=session.ids.map(id=>questions.find(q=>q.id===id)).filter(q=>q.difficulty==='dificil');
  assert.equal(chosenHard.length,6);
  assert.equal(new Set(chosenHard.map(q=>q.subtopicId)).size,Math.min(6,m.subtopics.length));
  assert.equal(exerciseSummary(s,m.id).total,2*m.subtopics.length+6);
  for(const id of session.ids){const q=questions.find(x=>x.id===id),order=session.optionOrders[id];
   assert.deepEqual([...order].sort((a,b)=>a-b),q.options.map((_,i)=>i));
   if(q.type==='ce')assert.deepEqual(order,[0,1]);
   assert.equal(order[order.indexOf(q.answer)],q.answer);
  }
 });
}
test('exercícios: acerto seguro, correção e revisão sem duplicar o ID',()=>{
 const s=createInitialState();const mid='INF-01';assert.equal(createExerciseSession(s,mid),true);
 const qid=s.progress.exercises[mid].ids[0],q=questionsForModule(mid).find(x=>x.id===qid);
 assert.equal(answerExercise(s,mid,qid,q.answer),true);
 assert.equal(answerExercise(s,mid,qid,q.answer),false);
 assert.equal(assessExercise(s,mid,qid,'seguro'),true);
 assert.equal(assessExercise(s,mid,qid,'seguro'),false);
 assert.equal(s.progress.reviewSchedule[qid].questionId,qid);
 assert.equal(Object.keys(s.progress.reviewSchedule).filter(x=>x===qid).length,1);
 assert.equal(nextExercise(s,mid),true);
});
test('Banco: filtros de subtópico e formato, sessão sem repetição, não respondidas',()=>{
 const s=createInitialState();
 assert.equal(updateBankFilter(s,'area','INF'),true);
 assert.equal(updateBankFilter(s,'moduleId','INF-01'),true);
 assert.equal(updateBankFilter(s,'subtopicId','INF-01-001'),true);
 assert.equal(updateBankFilter(s,'type','ce'),true);
 assert.equal(updateBankFilter(s,'situation','nao-respondidas'),true);
 assert.equal(startBankSession(s),true);
 const session=s.progress.questionBank.session;
 assert.equal(session.ids.length,1);
 const q=QUESTIONS.find(q=>q.id===session.ids[0]);assert.equal(q.id,'Q-INF-01-001-01');
 assert.equal(answerBankQuestion(s,q.id,q.answer),true);
 assert.equal(s.progress.questionHistory[q.id].bankAttempt.lastAnswer,q.answer);
 assert.equal(closeBankSession(s),true);
 assert.equal(startBankSession(s),false,'questão respondida não deve aparecer no recorte não respondidas');
 assert.equal(updateBankFilter(s,'situation','respondidas'),true);
 assert.equal(startBankSession(s),true);
 assert.equal(s.progress.questionBank.session.ids[0],q.id);
 assert.equal(closeBankSession(s),true);
 assert.equal(resetBankFilters(s),true);
 assert.equal(s.progress.questionBank.filter.subtopicId,'todos');
 assert.equal(s.progress.questionBank.filter.type,'todos');
});
test('Banco: filtros de formato e subtópico aparecem na interface',()=>{
 const el=mockMain();renderQuestionBank(el,createInitialState());
 assert.match(el.innerHTML,/data-bank-filter="subtopicId"/);
 assert.match(el.innerHTML,/data-bank-filter="type"/);
 assert.match(el.innerHTML,/Não respondidas/);
 assert.match(el.innerHTML,/Aproveitamento da prática/);
 assert.match(el.innerHTML,/Cobertura do Banco/);
});
test('aula: conteúdo aprofundado, progressão, resposta ativa e conclusão',()=>{
 const s=createInitialState(),main=mockMain(),id='INF-01-001';
 renderLesson(main,'INF-01',id,s);
 for(const heading of ['Conhecimento inicial','Desenvolvimento teórico','Diferenças importantes','Exemplo prático','Erros comuns','Recuperação ativa','Conclusão e autoavaliação'])assert.ok(main.innerHTML.includes(heading),heading);
 assert.match(main.innerHTML,/data-lesson-open="INF-01-002"/);
 assert.equal(saveLessonProgress(s,id,'complete'),true);
 assert.equal(saveLessonProgress(s,id,'rating','sei'),true);
 assert.equal(lessonStats(s,MODULES[0]).completed,1);
 renderLesson(main,'INF-01',id,s,{showAnswer:true});assert.match(main.innerHTML,/3.072 bytes|Filtrar as datas|Filtrar/);
});
test('módulo: aproveitamento no topo, etapas em ordem e informações ao final',()=>{
 const el=mockMain();renderModuleDetail(el,'INF-01',createInitialState());
 const html=el.innerHTML;
 const idx=['Aproveitamento do módulo','Diagnóstico','Aulas','Exercícios de aprendizagem','Informações do módulo'].map(t=>html.indexOf(t));
 assert.ok(idx.every(n=>n>=0),JSON.stringify(idx));
 for(let i=1;i<idx.length;i++)assert.ok(idx[i]>idx[i-1],JSON.stringify(idx));
 assert.ok(html.indexOf('Desempenho nas questões')>html.indexOf('Informações do módulo'));
});
for(const m of MODULES){
 test(`${m.id}: percurso integral de ${2*m.subtopics.length+6} questões, sem perdas de respostas`,()=>{
  const s=createInitialState();assert.equal(createExerciseSession(s,m.id),true);
  const session=s.progress.exercises[m.id];
  const ids=[...session.ids];const pool=new Map(questionsForModule(m.id).map(q=>[q.id,q]));
  for(let i=0;i<ids.length;i++){
   const id=ids[i],q=pool.get(id);
   assert.equal(session.ids[session.cursor],id);
   assert.equal(answerExercise(s,m.id,id,q.answer),true);
   assert.equal(assessExercise(s,m.id,id,'seguro'),true);
   if(i<ids.length-1)assert.equal(nextExercise(s,m.id),true);
  }
  const summary=exerciseSummary(s,m.id);
  assert.equal(summary.answered,ids.length);
  assert.equal(summary.assessed,ids.length);
  assert.equal(summary.correct,ids.length);
  assert.equal(summary.finished,true);
  assert.equal(summary.score,100);
  assert.equal(Object.keys(s.progress.reviewSchedule).length,ids.length);
 });
}
