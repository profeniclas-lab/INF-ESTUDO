/** Exercita os seletores reais e o fluxo de resposta, com estado temporário.
 * No pacote completo, importa as dependências reais. Na montagem local isolada,
 * as funções externas de revisão são simulações, sem acesso a dados reais.
 */
import test from 'node:test';import assert from 'node:assert/strict';
import {MODULES} from '../js/data/modules.js';
import {QUESTIONS,questionsForModule} from '../js/data/questions.js';
import {createInitialState} from '../js/core/state.js';
import {createExerciseSession,answerExercise,assessExercise,exerciseSummary,nextExercise} from '../js/features/exercises.js';
import {updateBankFilter,startBankSession,answerBankQuestion,closeBankSession} from '../js/features/banco-questoes.js';
import {renderLesson,saveLessonProgress,lessonStats} from '../js/features/lessons.js';
const targets=MODULES.filter(m=>/^INF-1[1-5]$/.test(m.id));
for(const m of targets){
 test(`${m.id}: sessão real escolhe ${2*m.subtopics.length+6} itens sem repetição`,()=>{
  const s=createInitialState();assert.equal(createExerciseSession(s,m.id),true);
  const session=s.progress.exercises[m.id],pool=questionsForModule(m.id);
  assert.equal(session.ids.length,2*m.subtopics.length+6);
  assert.equal(new Set(session.ids).size,session.ids.length);
  assert.deepEqual(new Set(session.ids.filter(id=>pool.find(q=>q.id===id).difficulty==='media')),
                   new Set(pool.filter(q=>q.difficulty==='media').map(q=>q.id)));
  const hard=session.ids.map(id=>pool.find(q=>q.id===id)).filter(q=>q.difficulty==='dificil');
  assert.equal(hard.length,6);assert.equal(new Set(hard.map(q=>q.subtopicId)).size,Math.min(6,m.subtopics.length));
  for(const id of session.ids){const q=pool.find(q=>q.id===id),ord=session.optionOrders[id];
   assert.deepEqual([...ord].sort((a,b)=>a-b),q.options.map((_,i)=>i));
   if(q.type==='ce')assert.deepEqual(ord,[0,1]);
  }
 });
 test(`${m.id}: respostas, autoavaliação e agenda não duplicam IDs`,()=>{
  const s=createInitialState();assert.equal(createExerciseSession(s,m.id),true);
  const ids=s.progress.exercises[m.id].ids,pool=questionsForModule(m.id);
  for(let i=0;i<ids.length;i++){
   const q=pool.find(x=>x.id===ids[i]);
   assert.equal(answerExercise(s,m.id,q.id,q.answer),true);
   assert.equal(assessExercise(s,m.id,q.id,'seguro'),true);
   if(i<ids.length-1)assert.equal(nextExercise(s,m.id),true);
  }
  assert.equal(exerciseSummary(s,m.id).finished,true);
  assert.equal(exerciseSummary(s,m.id).score,100);
  assert.equal(Object.keys(s.progress.reviewSchedule).length,ids.length);
 });
 test(`${m.id}: aula renderiza seções e grava conclusão em estado simulado`,()=>{
  const s=createInitialState(),main={innerHTML:''},topic=m.subtopics[0].id;
  renderLesson(main,m.id,topic,s);
  assert.ok(main.innerHTML.includes('Diferenças importantes'));
  assert.ok(main.innerHTML.includes('Erros comuns'));
  assert.equal(saveLessonProgress(s,topic,'complete'),true);
  assert.equal(saveLessonProgress(s,topic,'rating','sei'),true);
  assert.equal(lessonStats(s,m).completed,1);
 });
}
test('Banco: filtros combinados de módulo, subtópico, formato e não respondidas',()=>{
 const state=createInitialState();
 assert.equal(updateBankFilter(state,'area','INF'),true);
 assert.equal(updateBankFilter(state,'moduleId','INF-15'),true);
 assert.equal(updateBankFilter(state,'subtopicId','INF-15-002'),true);
 assert.equal(updateBankFilter(state,'type','ce'),true);
 assert.equal(updateBankFilter(state,'situation','nao-respondidas'),true);
 assert.equal(startBankSession(state),true);
 const session=state.progress.questionBank.session;
 assert.deepEqual(session.ids,['Q-INF-15-002-01']);
 assert.equal(answerBankQuestion(state,session.ids[0],QUESTIONS.find(q=>q.id===session.ids[0]).answer),true);
 assert.equal(closeBankSession(state),true);
 assert.equal(startBankSession(state),false);
});
test('Banco global aceita questões novas isoladas e preserva o estado após encerrar sessão',()=>{
 const state=createInitialState();
 assert.equal(updateBankFilter(state,'moduleId','INF-11'),true);
 assert.equal(updateBankFilter(state,'subtopicId','INF-11-004'),true);
 assert.equal(startBankSession(state),true);
 const chosen=[...state.progress.questionBank.session.ids];assert.equal(chosen.length,4);
 assert.equal(new Set(chosen).size,4);
 assert.equal(closeBankSession(state),true);
 assert.equal(state.progress.questionBank.session,null);
});
