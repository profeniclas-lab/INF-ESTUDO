/** INF-ESTUDO — Fase D 1-R. Aproveitamento no topo; indicadores complementares no rodapé. */
import { AREAS, getModuleById } from '../data/modules.js';
import { moduleAchievement, bankAchievementEvidence } from './module-achievement.js';
import { getDiagnosticSummary } from './diagnostic.js';
import { getLesson } from '../data/lessons.js';
import { exercisePool, exerciseSummary } from './exercises.js';
import { lessonStats } from './lessons.js';
import { isModuleCompleted } from '../core/progress.js';
import { questionsForModule } from '../data/questions.js';
import { questionPerformance, performanceRateColor } from '../core/question-performance.js';
const e=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=n=>Number(n).toLocaleString('pt-BR',{maximumFractionDigits:2});
const stages=[
 {id:'diagnostic',title:'Diagnóstico',description:'Avalie o que já sabe antes de estudar, com um flashcard por subtópico.'},
 {id:'lesson',title:'Aulas',description:'Estude o conteúdo completo de cada subtópico em páginas próprias.'},
 {id:'exercises',title:'Exercícios de aprendizagem — Praticar o que aprendi',description:'Resolva as questões médias do módulo e mais seis difíceis sorteadas.'}
];
function achievementSummary(p){
 const points=Math.max(0,Math.min(100,Number(p.earnedWeightedPoints)||0));
 const done=isModuleCompleted(p,75);
 return `<section class="module-achievement" aria-labelledby="achievementTitle"><h2 id="achievementTitle">Aproveitamento do módulo</h2>
 <p style="font-size:20px"><strong>${fmt(points)} de 100 pontos</strong>${p.hasData?' · Parcial ou final':' · Ainda sem atividades avaliadas'}</p>
 <div role="progressbar" aria-label="Aproveitamento do módulo" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${points}" style="height:11px;background:var(--border,#d5dce3);border-radius:7px;overflow:hidden"><div style="height:100%;width:${points}%;background:var(--accent,#2563eb)"></div></div>
 <p>${done?'Meta de 75 pontos atingida. O módulo deixa as pendências do Dashboard, mas pode ser revisitado.':`Meta: 75 pontos. Faltam ${fmt(Math.max(0,75-points))} pontos.`}</p></section>`;
}
function achievementDetails(p){
 const parts=[['Diagnóstico',['diagnostic'],20],['Aulas',['lessonCompletion','lessonSelfAssessment'],30],['Exercícios',['exercises'],30],['Banco de Questões',['bank'],20]];
 return `<section aria-label="Detalhamento de aproveitamento"><h3>Pesos e pontos obtidos</h3><dl class="module-info-list">${parts.map(([name,keys,weight])=>{const sum=keys.reduce((n,k)=>n+(p.components?.[k]?.points||0),0);return `<div><dt>${e(name)}</dt><dd>${fmt(sum)} de ${weight} pontos</dd></div>`;}).join('')}</dl><p class="page-subtitle">Aulas: 15% leitura/conclusão + 15% autoavaliação. Os 20 pontos do Banco usam a taxa de acerto nas questões distintas respondidas, sem exigir cobertura total.</p></section>`;
}
function performanceMarkup(state,moduleId){
 const s=questionPerformance(questionsForModule(moduleId)||[],state);
 const bank=bankAchievementEvidence(state,getModuleById(moduleId));
 const color=performanceRateColor(s.rate),style=color==='green'?'color:#167341':color==='red'?'color:#ba1c1c':'';
 const pct=n=>Number.isFinite(n)?`${fmt(n)}%`:'—';
 return `<section aria-labelledby="performanceTitle" style="margin-top:16px"><h3 id="performanceTitle">Desempenho nas questões</h3>
 <p><strong>${s.correct} de ${s.answered} respondidas</strong> · <strong style="${style}">Aproveitamento da prática: ${pct(s.rate)}</strong></p>
 <p>${s.total} questões disponíveis · ${s.unanswered} ainda não respondidas · ${s.wrong} incorretas.</p>
 <p><strong>Cobertura do Banco: ${bank.total?pct(100*bank.answered/bank.total):'—'}</strong> (${bank.answered}/${bank.total} distintas respondidas no Banco) · <strong>Domínio estimado: ${s.total?pct(100*s.correct/s.total):'—'}</strong></p>
 <dl class="module-info-list"><div><dt>Acertos por chute</dt><dd>${s.guessedCorrect}</dd></div><div><dt>Erros por desconhecimento</dt><dd>${s.unknownWrong}</dd></div><div><dt>Acertos seguros</dt><dd>${s.secureCorrect}</dd></div><div><dt>Acertos com dúvida</dt><dd>${s.doubtCorrect}</dd></div><div><dt>Acertos sem classificação</dt><dd>${s.unclassifiedCorrect}</dd></div></dl>
 <p><strong>Acertos seguros entre respondidas: ${pct(s.knowledgeRate)}</strong></p><p class="page-subtitle">Aproveitamento da prática = acertos entre as questões respondidas na prática; cobertura do Banco = questões distintas respondidas especificamente no Banco, divididas pelo total disponível. Domínio estimado é indicador distinto. A última resposta válida prevalece, sem duplicar IDs.</p></section>`;
}
export function renderModuleDetail(main,moduleId,state){
 const m=getModuleById(moduleId);
 if(!m){main.innerHTML='<div class="notice">Módulo não encontrado. <button class="btn" data-action="modules-back">Voltar</button></div>';return;}
 const diag=getDiagnosticSummary(state,moduleId),ls=lessonStats(state,m),ex=exerciseSummary(state,moduleId),p=moduleAchievement(state,m);
 main.innerHTML=`<section class="module-detail" aria-labelledby="pageTitle"><button class="btn" data-action="modules-back">← Todos os módulos</button><h1 class="page-title" id="pageTitle" style="margin-top:18px">${e(m.title)}</h1><p class="page-subtitle">${e(m.id)} · ${e(AREAS[m.area])} · ${m.subtopics.length} subtópicos</p>
 ${achievementSummary(p)}
 ${stages.map((st,i)=>{
  const available=st.id==='diagnostic'&&diag;
  const status=available?(diag.completed?'Concluído':`${diag.answered}/${diag.total} respondidos`):st.id==='exercises'&&exercisePool(moduleId).length?(ex?.finished?'Concluído':ex?`${ex.answered}/${ex.total} respondidas`:'Disponível'):st.id==='lesson'&&ls?`${ls.completed}/${ls.total} estudadas`:'Em preparação';
  return `<section class="module-stage" aria-labelledby="stage-${i}"><div class="module-stage-heading"><h2 id="stage-${i}">${i+1}. ${e(st.title)}</h2><span class="module-pending">${e(status)}</span></div><p>${e(st.description)}</p>
 ${available?`<button type="button" class="btn btn-primary" data-action="diagnostic-open">${diag.completed?'Rever diagnóstico':diag.answered?'Continuar diagnóstico':'Iniciar diagnóstico'}</button>`:''}
 ${st.id==='exercises'&&exercisePool(moduleId).length?`<button type="button" class="btn btn-primary" data-action="exercise-open">${ex?.finished?'Rever resultado':ex?'Continuar atividade':'Iniciar exercícios'}</button>`:''}
 ${st.id==='lesson'?`<h3>Aulas por subtópico</h3><ol class="module-subtopics">${m.subtopics.map(t=>`<li><span>${e(t.title)}</span>${getLesson(t.id)?`<button type="button" class="btn" data-lesson-open="${e(t.id)}">${state.progress?.lessons?.[t.id]?.completed?'Rever aula ✓':'Estudar aula'}</button>`:'<small>Em preparação</small>'}</li>`).join('')}</ol>`:''}
 </section>`;}).join('')}
 <section class="module-stage" aria-labelledby="moduleInfoTitle"><h2 id="moduleInfoTitle">Informações do módulo</h2><dl class="module-info-list"><div><dt>Identificador</dt><dd>${e(m.id)}</dd></div><div><dt>Área</dt><dd>${e(AREAS[m.area])}</dd></div><div><dt>Subtópicos</dt><dd>${m.subtopics.length}</dd></div><div><dt>Prioridade</dt><dd>${e(m.priority)}</dd></div><div><dt>Atividades disponíveis</dt><dd>${[diag?'Diagnóstico':null,ls?'Aulas':null,exercisePool(moduleId).length?'Exercícios':null].filter(Boolean).join(' e ')||'Nenhuma nesta etapa'}</dd></div><div><dt>Diagnóstico</dt><dd>${diag?`${diag.answered}/${diag.total} respostas`:'Em preparação'}</dd></div></dl>
 ${achievementDetails(p)}${performanceMarkup(state,moduleId)}</section></section>`;
}
