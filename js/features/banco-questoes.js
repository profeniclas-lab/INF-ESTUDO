/** INF-ESTUDO — Banco global: preserva os contratos de sessão e acrescenta subtópico/formato. */
import { MODULES, AREAS } from '../data/modules.js';
import { recordBankReview } from '../core/review-events.js';
import { questionsForModule } from '../data/questions.js';
import { matchesQuestionStatus, countQuestionStatuses, QUESTION_STATUS_OPTIONS } from '../core/question-status.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffle=a=>{const x=[...a];for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;};
const valid=q=>q&&typeof q.id==='string'&&Array.isArray(q.options)&&q.options.length>=2&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length;
const defaults=()=>({area:'todas',moduleId:'todos',subtopicId:'todos',type:'todos',difficulty:'todas',situation:'todas',limit:'todas'});
const limitOptions=['todas','10','20','30'];
const difficulties=[['todas','Todas'],['facil','Fácil'],['media','Média'],['dificil','Difícil']];
const situations=[['todas','Todas'],['nao-respondidas','Não respondidas'],['respondidas','Respondidas'],['erradas','Erradas'],['acertadas','Acertadas']];
const types={ce:'Certo ou Errado',vf:'Sequência V/F',afirmacoes:'Assertivas I, II, III',associacao:'Associação entre colunas',lacunas:'Lacunas',classica:'Múltipla escolha',exceto:'EXCETO'};
const difficultyLabels={facil:'Fácil',media:'Média',dificil:'Difícil'};
function bank(){const out=[],seen=new Set();for(const m of MODULES)for(const q of questionsForModule(m.id)||[]){if(valid(q)&&!seen.has(q.id)){seen.add(q.id);out.push({...q,moduleId:m.id,area:m.area});}}return out;}
const get=id=>bank().find(q=>q.id===id);
function store(state){state.progress??={};state.progress.questionBank??={filter:defaults(),session:null};const data=state.progress.questionBank;data.filter={...defaults(),...(data.filter||{})};if(!limitOptions.includes(data.filter.limit))data.filter.limit='todas';return data;}
const inScope=(q,f)=>(f.area==='todas'||q.area===f.area)&&(f.moduleId==='todos'||q.moduleId===f.moduleId)&&(f.subtopicId==='todos'||q.subtopicId===f.subtopicId)&&(f.type==='todos'||q.type===f.type)&&(f.difficulty==='todas'||q.difficulty===f.difficulty);
const matches=(q,f,history)=>inScope(q,f)&&matchesQuestionStatus(q,history,f.situation);
const option=(v,label,selected)=>`<option value="${esc(v)}" ${v===selected?'selected':''}>${esc(label)}</option>`;
const field=(label,id,key,options)=>`<label class="qb-field" for="${id}"><span class="qb-field-title">${esc(label)}</span><span class="qb-select-wrap"><select id="${id}" data-bank-filter="${key}">${options}</select></span></label>`;
const chip=(group,id,label,count,selected)=>`<button type="button" class="qb-chip${selected===id?' is-active':''}" data-bank-quick="${esc(group)}" data-bank-value="${esc(id)}" aria-pressed="${selected===id}"><span>${esc(label)}</span>${count===null?'':`<span class="qb-chip-count">${count}</span>`}</button>`;
const stat=(label,value,help)=>`<article class="qb-stat"><span class="qb-stat-label">${esc(label)}</span><strong class="qb-stat-value">${esc(value)}</strong><span class="qb-stat-helper">${esc(help)}</span></article>`;
export function updateBankFilter(state,key,value){
 const data=store(state);if(data.session||!['area','moduleId','subtopicId','type','difficulty','situation','limit'].includes(key))return false;
 const f={...data.filter,[key]:value};if(key==='area'){f.moduleId='todos';f.subtopicId='todos';}if(key==='moduleId')f.subtopicId='todos';
 if(!['todas',...Object.keys(AREAS)].includes(f.area))return false;
 if(f.moduleId!=='todos'&&!MODULES.some(m=>m.id===f.moduleId&&(f.area==='todas'||m.area===f.area)))return false;
 if(f.subtopicId!=='todos'&&!MODULES.some(m=>(f.moduleId==='todos'||m.id===f.moduleId)&&(f.area==='todas'||m.area===f.area)&&m.subtopics.some(t=>t.id===f.subtopicId)))return false;
 if(!['todos',...Object.keys(types)].includes(f.type)||!difficulties.some(([v])=>v===f.difficulty)||!QUESTION_STATUS_OPTIONS.includes(f.situation)||!limitOptions.includes(f.limit))return false;
 data.filter=f;return true;
}
export function resetBankFilters(state){const d=store(state);if(d.session)return false;d.filter=defaults();return true;}
export function startBankSession(state){const d=store(state);if(d.session)return false;const available=shuffle(bank().filter(q=>matches(q,d.filter,state.progress?.questionHistory||{})));if(!available.length)return false;const selected=d.filter.limit==='todas'?available:available.slice(0,Number(d.filter.limit));d.session={ids:selected.map(q=>q.id),cursor:0,answers:{},orders:Object.fromEntries(selected.map(q=>[q.id,q.type==='ce'?q.options.map((_,i)=>i):shuffle(q.options.map((_,i)=>i))])),startedAt:new Date().toISOString()};return true;}
export function answerBankQuestion(state,id,answer){const session=store(state).session,q=get(id);if(!session||session.ids[session.cursor]!==id||!q||Object.hasOwn(session.answers,id)||!Number.isInteger(answer)||answer<0||answer>=q.options.length)return false;
 // Mantém o contrato original: registrar revisão antes de consolidar a resposta.
 if(!recordBankReview(state,q,answer))return false;
 session.answers[id]=answer;const history=state.progress?.questionHistory?.[id];if(history)history.bankAttempt={lastAnswer:answer,updatedAt:new Date().toISOString()};state.progress.modules??={};state.progress.modules[q.moduleId]??={started:true};return true;
}
export function nextBankQuestion(state){const s=store(state).session;if(!s||!Object.hasOwn(s.answers,s.ids[s.cursor])||s.cursor>=s.ids.length-1)return false;s.cursor++;return true;}
export function closeBankSession(state){const d=store(state);if(!d.session)return false;d.session=null;return true;}
function renderFilters(main,state,data,all){
 const f=data.filter,history=state.progress?.questionHistory||{},scope=all.filter(q=>inScope(q,f)),available=scope.filter(q=>matchesQuestionStatus(q,history,f.situation)),counts=countQuestionStatuses(scope,history);
 const modules=MODULES.filter(m=>f.area==='todas'||m.area===f.area);
 const subtopics=modules.flatMap(m=>(f.moduleId==='todos'||m.id===f.moduleId)?m.subtopics.map(t=>[t.id,`${t.id} — ${t.title}`]):[]);
 const active=Object.entries(f).filter(([k,v])=>v!==(k==='area'||k==='difficulty'||k==='situation'||k==='limit'?'todas':'todos')).length;
 const planned=f.limit==='todas'?available.length:Math.min(available.length,Number(f.limit));
 const attempts=scope.map(q=>({q,answer:history[q.id]?.bankAttempt?.lastAnswer})).filter(x=>Number.isInteger(x.answer));
 const right=attempts.filter(x=>x.q.answer===x.answer).length;
 const rate=attempts.length?Math.round(100*right/attempts.length)+'%':'—';
 const coverage=scope.length?Math.round(100*attempts.length/scope.length)+'%':'—';
 main.innerHTML=`<section class="module-detail qb-page" aria-labelledby="qb-title">
 <header class="qb-hero"><div class="qb-hero-label">PRÁTICA E APRENDIZAGEM</div><h1 class="qb-hero-title" id="qb-title">Banco de Questões</h1><p>Escolha a área, o módulo, o subtópico, o formato e pratique com correção comentada.</p><div class="qb-hero-note">Itens autorais identificados; não confundir com questões reais de concursos.</div></header>
 <div class="qb-summary" aria-label="Resumo do banco">
 ${stat('Disponíveis no banco',all.length,'Questões válidas cadastradas')}
 ${stat('Resultado dos filtros',available.length,'Questões no recorte selecionado')}
 ${stat('Respondidas',counts.respondidas,'Última resposta por questão')}
 ${stat('Aproveitamento da prática',rate,`${right} corretas de ${attempts.length} respondidas no Banco`)}
 ${stat('Cobertura do Banco',coverage,`${attempts.length} questões distintas de ${scope.length} no recorte`)}</div>
 <section class="qb-panel" aria-labelledby="qb-filter-title"><div class="qb-panel-heading"><div><span class="qb-eyebrow">CONFIGURAR PRÁTICA</span><h2 id="qb-filter-title">Encontre suas questões</h2><p>Combine filtros para selecionar sua próxima sessão.</p></div><button type="button" class="qb-reset" data-bank-reset="1" ${active?'':'disabled'}>↺ Limpar filtros${active?` (${active})`:''}</button></div>
 <div class="qb-fields">
 ${field('Área','qb-area','area',option('todas','Todas as áreas',f.area)+Object.entries(AREAS).map(([v,n])=>option(v,n,f.area)).join(''))}
 ${field('Módulo','qb-module','moduleId',option('todos','Todos os módulos',f.moduleId)+modules.map(m=>option(m.id,`${m.id} — ${m.title}`,f.moduleId)).join(''))}
 ${field('Subtópico','qb-subtopic','subtopicId',option('todos','Todos os subtópicos',f.subtopicId)+subtopics.map(([v,n])=>option(v,n,f.subtopicId)).join(''))}
 ${field('Formato','qb-type','type',option('todos','Todos os formatos',f.type)+Object.entries(types).map(([v,n])=>option(v,n,f.type)).join(''))}
 </div>
 <div class="qb-choice-group" role="group" aria-labelledby="qb-difficulty-label"><h3 id="qb-difficulty-label">Dificuldade</h3><div class="qb-chips">${difficulties.map(([id,label])=>chip('difficulty',id,label,null,f.difficulty)).join('')}</div></div>
 <div class="qb-choice-group" role="group" aria-labelledby="qb-situation-label"><h3 id="qb-situation-label">Situação</h3><div class="qb-chips">${situations.map(([id,label])=>chip('situation',id,label,counts[id],f.situation)).join('')}</div><p class="qb-hint">A situação usa a última resposta registrada.</p></div>
 <div class="qb-session-settings">${field('Quantidade por sessão','qb-limit','limit', [['todas','Todas as questões filtradas'],['10','Até 10'],['20','Até 20'],['30','Até 30']].map(([v,n])=>option(v,n,f.limit)).join(''))}<p>As questões são sorteadas sem repetição e as alternativas C/E mantêm ordem fixa.</p></div></section>
 <section class="qb-start-panel" aria-label="Iniciar sessão"><div><span class="qb-eyebrow">PRONTO PARA PRATICAR?</span><h2>${planned?`${planned} questão(ões) nesta sessão`:'Nenhuma questão encontrada'}</h2><p>${planned?`Encontradas ${available.length} questão(ões) com estes filtros.`:'Altere os filtros para localizar itens disponíveis.'}</p></div><button type="button" class="btn btn-primary qb-start-button" data-action="bank-start" ${planned?'':'disabled'}>Iniciar prática →</button></section>
 ${all.length?'':'<div class="notice">Nenhuma questão válida encontrada.</div>'}<p class="qb-footnote">Questões permanecem no histórico após encerrar a sessão. Aproveitamento e cobertura são métricas distintas.</p></section>`;
}
function renderAnswer(main,session){
 const q=get(session.ids[session.cursor]);if(!q){main.innerHTML='<section class="qb-page qb-panel"><h1>Questão indisponível</h1><button class="btn" data-action="bank-close">Encerrar sessão</button></section>';return;}
 const order=session.orders[q.id]||q.options.map((_,i)=>i),answered=Object.hasOwn(session.answers,q.id),selected=session.answers[q.id],correct=answered&&selected===q.answer;
 const completed=Object.keys(session.answers).length,total=session.ids.length,current=session.cursor+1,progress=Math.round(completed/total*100),final=current===total;
 const items=order.map((idx,pos)=>`<li><span class="qb-comment-letter">${q.type==='ce'?`Item ${pos+1}`:`${String.fromCharCode(65+pos)})`}</span><span><strong>${esc(q.options[idx])}</strong> — ${esc(q.optionComments?.[idx]||'Fundamento não disponível.')}</span></li>`).join('');
 const explanation=answered?`<section class="qb-correction ${correct?'is-correct':'is-wrong'}" aria-live="polite"><div class="qb-feedback-head"><span>${correct?'✓':'!'}</span><div><span class="qb-eyebrow">CORREÇÃO IMEDIATA</span><h3>${correct?'Você acertou!':'Vamos revisar esta questão'}</h3></div></div><p><strong>Resposta correta:</strong> ${esc(q.options[q.answer])}</p>
 <div class="qb-explanation"><h4>Fundamento</h4><p>${esc(q.explanation)}</p></div><details class="qb-details" open><summary>Comentários das alternativas</summary><ol>${items}</ol></details><div class="qb-explain-extra"><h4>Conceito principal</h4><p>${esc(q.concept)}</p><h4>Pegadinha</h4><p>${esc(q.trap)}</p><h4>Exemplo adicional</h4><p>${esc(q.newExample)}</p><h4>Desafio</h4><p>${esc(q.challenge)}</p></div></section>`:'';
 main.innerHTML=`<section class="module-detail qb-page qb-session" aria-labelledby="qb-session-title"><div class="qb-session-top"><button type="button" class="btn qb-exit" data-action="bank-close">← Encerrar sessão</button><span class="qb-session-number">Questão ${current} de ${total}</span></div><div class="qb-session-progress"><div class="qb-progress-meta"><span>${completed} respondidas</span><strong>${progress}% da sessão</strong></div><div class="qb-progress-track" role="progressbar" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100"><div class="qb-progress-fill" style="width:${progress}%"></div></div></div>
 <article class="qb-question-card"><div class="qb-question-tags"><span>${esc(q.moduleId)}</span><span>${esc(q.subtopicId)}</span><span>${esc(types[q.type]||q.type)}</span><span>${esc(difficultyLabels[q.difficulty]||q.difficulty)}</span></div><h1 class="qb-question-title" id="qb-session-title">${esc(q.stem)}</h1><p>${answered?'Resposta registrada. Consulte a correção abaixo.':'Escolha uma alternativa para corrigir.'}</p><div class="qb-options" role="group" aria-label="Alternativas">${order.map((orig,pos)=>`<button type="button" class="qb-option${answered&&orig===q.answer?' is-correct':answered&&orig===selected?' is-wrong':''}" data-bank-choice="${orig}" ${answered?'disabled':''} ${answered&&orig===selected?'aria-pressed="true"':''}><span class="qb-option-letter">${q.type==='ce'?'•':String.fromCharCode(65+pos)}</span><span class="qb-option-text">${esc(q.options[orig])}</span>${answered&&orig===q.answer?'<span class="qb-option-mark">✓</span>':''}</button>`).join('')}</div></article>${explanation}
 ${answered?`<div class="qb-bottom-action">${final?`<p class="qb-finished">Você respondeu às ${total} questões.</p><button class="btn btn-primary qb-start-button" data-action="bank-close">Voltar aos filtros</button>`:`<button class="btn btn-primary qb-start-button" data-action="bank-next">Próxima questão →</button>`}</div>`:''}</section>`;
}
export function renderQuestionBank(main,state){const d=store(state);if(d.session)renderAnswer(main,d.session);else renderFilters(main,state,d,bank());}
