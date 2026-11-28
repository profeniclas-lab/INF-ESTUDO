/** Testes com motor REAL. Execute no repositório completo após upload. Nenhum dado do usuário é modificado. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { MODULES } from '../js/data/modules.js';
import { QUESTIONS,questionsForModule } from '../js/data/questions.js';
import { createInitialState } from '../js/core/state.js';
import { createExerciseSession,answerExercise,assessExercise,exerciseSummary,nextExercise } from '../js/features/exercises.js';
import { updateBankFilter,startBankSession,answerBankQuestion,closeBankSession } from '../js/features/banco-questoes.js';
import { renderLesson,saveLessonProgress,lessonStats } from '../js/features/lessons.js';
import { renderModuleDetail } from '../js/features/module-detail.js';
const selected=MODULES.filter(m=>/^INF-(?:06|07|08|09|10)$/.test(m.id));
for(const m of selected){
 test(`${m.id}: seleção real de todas as médias e seis difíceis sem repetição`,()=>{
  const s=createInitialState();assert.equal(createExerciseSession(s,m.id),true);
  const chosen=s.progress.exercises[m.id];const pool=questionsForModule(m.id);
  assert.equal(chosen.ids.length,2*m.subtopics.length+6);
  assert.equal(new Set(chosen.ids).size,chosen.ids.length);
  for(const q of pool.filter(q=>q.difficulty==='media'))assert.ok(chosen.ids.includes(q.id),q.id);
  const difficult=chosen.ids.map(id=>pool.find(q=>q.id===id)).filter(q=>q.difficulty==='dificil');
  assert.equal(difficult.length,6);assert.equal(new Set(difficult.map(q=>q.subtopicId)).size,Math.min(6,m.subtopics.length));
  for(const id of chosen.ids){const q=pool.find(q=>q.id===id),order=chosen.optionOrders[id];
   assert.deepEqual([...order].sort((a,b)=>a-b),q.options.map((_,i)=>i));
   if(q.type==='ce')assert.deepEqual(order,[0,1]);
  }
 });
 test(`${m.id}: resposta, autoavaliação, conclusão e fila sem IDs duplicados`,()=>{
  const s=createInitialState();assert.equal(createExerciseSession(s,m.id),true);
  const ids=[...s.progress.exercises[m.id].ids];const bank=questionsForModule(m.id);
  for(let i=0;i<ids.length;i++){
   const id=ids[i],q=bank.find(x=>x.id===id);
   assert.equal(answerExercise(s,m.id,id,q.answer),true);
   assert.equal(assessExercise(s,m.id,id,'seguro'),true);
   if(i<ids.length-1)assert.equal(nextExercise(s,m.id),true);
  }
  const summary=exerciseSummary(s,m.id);assert.equal(summary.finished,true);
  assert.equal(summary.answered,ids.length);assert.equal(summary.score,100);
  assert.equal(Object.keys(s.progress.reviewSchedule).length,ids.length);
 });
}
test('Banco: filtros de subtópico, tipo e não respondidas aplicados aos itens novos',()=>{
 const s=createInitialState();assert.equal(updateBankFilter(s,'area','INF'),true);
 assert.equal(updateBankFilter(s,'moduleId','INF-10'),true);
 assert.equal(updateBankFilter(s,'subtopicId','INF-10-001'),true);
 assert.equal(updateBankFilter(s,'type','ce'),true);
 assert.equal(updateBankFilter(s,'situation','nao-respondidas'),true);
 assert.equal(startBankSession(s),true);
 const ids=s.progress.questionBank.session.ids;assert.deepEqual(ids,['Q-INF-10-001-01']);
 const q=QUESTIONS.find(q=>q.id===ids[0]);assert.equal(answerBankQuestion(s,q.id,q.answer),true);
 assert.equal(closeBankSession(s),true);assert.equal(startBankSession(s),false);
});
test('Aulas e hierarquia do módulo: páginas, respostas e indicadores finais',()=>{
 const s=createInitialState(),mid='INF-08',t='INF-08-001',main={innerHTML:''};
 renderLesson(main,mid,t,s);assert.ok(main.innerHTML.includes('Diferenças importantes'));
 assert.ok(main.innerHTML.includes('Erros comuns'));
 assert.equal(saveLessonProgress(s,t,'complete'),true);assert.equal(saveLessonProgress(s,t,'rating','sei'),true);
 assert.ok(lessonStats(s,selected.find(m=>m.id===mid)).completed>=1);
 renderModuleDetail(main,mid,s);
 assert.ok(main.innerHTML.indexOf('Aproveitamento')<main.innerHTML.indexOf('Diagnóstico'));
 assert.ok(main.innerHTML.indexOf('Informações')>main.innerHTML.indexOf('Exercícios de aprendizagem'));
});
