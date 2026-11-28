/** Usa o seletor real, correção/autoavaliação real e filtros reais do Banco.
 * Os três módulos de revisão externos podem ser simulações em montagem isolada.
 * Nunca utiliza o armazenamento real do usuário.
 */
import test from 'node:test';import assert from 'node:assert/strict';
import{MODULES}from'../js/data/modules.js';import{questionsForModule}from'../js/data/questions.js';
import{createInitialState}from'../js/core/state.js';
import{createExerciseSession,answerExercise,assessExercise,nextExercise,exerciseSummary}from'../js/features/exercises.js';
import{updateBankFilter,startBankSession,answerBankQuestion,closeBankSession,renderQuestionBank}from'../js/features/banco-questoes.js';
import{renderLesson,saveLessonProgress,lessonStats}from'../js/features/lessons.js';
const targets=MODULES.filter(m=>/^INF-(?:16|17|18|19|20)$/.test(m.id));
for(const m of targets){
 test(`${m.id} sessão: 12 médias e seis difíceis, IDs únicos, respostas originais`,()=>{
  const state=createInitialState();assert.equal(createExerciseSession(state,m.id),true);
  const s=state.progress.exercises[m.id],bank=questionsForModule(m.id);
  assert.equal(s.ids.length,18);assert.equal(new Set(s.ids).size,18);
  assert.deepEqual(new Set(s.ids.filter(id=>bank.find(q=>q.id===id).difficulty==='media')),
    new Set(bank.filter(q=>q.difficulty==='media').map(q=>q.id)));
  assert.equal(s.ids.filter(id=>bank.find(q=>q.id===id).difficulty==='dificil').length,6);
  assert.equal(new Set(s.ids.filter(id=>bank.find(q=>q.id===id).difficulty==='dificil').map(id=>bank.find(q=>q.id===id).subtopicId)).size,6);
  for(const qid of s.ids){const q=bank.find(q=>q.id===qid),order=s.optionOrders[qid];
   assert.deepEqual([...order].sort((a,b)=>a-b),q.options.map((_,i)=>i));
   if(q.type==='ce')assert.deepEqual(order,[0,1]);
  }
 });
 test(`${m.id} avaliação completa: 18 respostas sem duplicar a fila`,()=>{
  const state=createInitialState();assert.equal(createExerciseSession(state,m.id),true);
  const ids=[...state.progress.exercises[m.id].ids],bank=questionsForModule(m.id);
  for(let i=0;i<ids.length;i++){
   const q=bank.find(x=>x.id===ids[i]);assert.equal(answerExercise(state,m.id,q.id,q.answer),true);
   assert.equal(assessExercise(state,m.id,q.id,'seguro'),true);
   if(i<ids.length-1)assert.equal(nextExercise(state,m.id),true);
  }
  assert.equal(exerciseSummary(state,m.id).finished,true);
  assert.equal(exerciseSummary(state,m.id).score,100);
  assert.equal(Object.keys(state.progress.reviewSchedule).length,18);
 });
 test(`${m.id} aula: seções paginadas, conclusão e autoavaliação`,()=>{
  const state=createInitialState();const topic=m.subtopics[0].id;const main={innerHTML:''};
  renderLesson(main,m.id,topic,state);
  assert.match(main.innerHTML,/Conhecimento inicial/);assert.match(main.innerHTML,/Desenvolvimento teórico/);
  assert.match(main.innerHTML,/Diferenças importantes/);assert.match(main.innerHTML,/Erros comuns/);
  assert.equal(saveLessonProgress(state,topic,'complete'),true);assert.equal(saveLessonProgress(state,topic,'rating','sei'),true);
  assert.equal(lessonStats(state,m).completed,1);
 });
}
test('Banco novo: combina subtópico, formato, nível, não respondidas, sem modificar outros módulos',()=>{
 const state=createInitialState();
 assert.equal(updateBankFilter(state,'area','INF'),true);
 assert.equal(updateBankFilter(state,'moduleId','INF-18'),true);
 assert.equal(updateBankFilter(state,'subtopicId','INF-18-004'),true);
 assert.equal(updateBankFilter(state,'type','ce'),true);
 assert.equal(updateBankFilter(state,'difficulty','media'),true);
 assert.equal(updateBankFilter(state,'situation','nao-respondidas'),true);
 assert.equal(startBankSession(state),true);
 const qid=state.progress.questionBank.session.ids[0];assert.equal(qid,'Q-INF-18-004-01');
 const q=questionsForModule('INF-18').find(x=>x.id===qid);
 assert.equal(answerBankQuestion(state,qid,q.answer),true);assert.equal(closeBankSession(state),true);
 assert.equal(startBankSession(state),false);
 assert.equal(state.progress.questionHistory[qid].lastAnswer,q.answer);
});
test('Banco: aparência informa aproveitamento e cobertura separadamente no novo módulo',()=>{
 const state=createInitialState();const root={innerHTML:''};
 assert.equal(updateBankFilter(state,'moduleId','INF-20'),true);
 renderQuestionBank(root,state);
 assert.match(root.innerHTML,/Aproveitamento da prática/);
 assert.match(root.innerHTML,/Cobertura do Banco/);
 assert.match(root.innerHTML,/Não respondidas/);
});
