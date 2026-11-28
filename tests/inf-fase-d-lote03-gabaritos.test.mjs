/** Resolução editorial independente da posição gravada da resposta. */
import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
import {QUESTIONS} from '../js/data/questions.js';
const editorial=JSON.parse(readFileSync(new URL('../docs/FASE_D_LOTE_3_BASE_EDITORIAL.json',import.meta.url)));
const qs=QUESTIONS.filter(q=>/^INF-1[1-5]$/.test(q.moduleId)).sort((a,b)=>a.id.localeCompare(b.id));
const topics=Object.keys(editorial).sort();
const letter=n=>['I','II','III'][n];
function expected(q){
 const tid=q.subtopicId,e=editorial[tid],idx=topics.indexOf(tid),n=Number(q.id.slice(-2));
 if(n===1)return idx%2===0?'CERTO':'ERRADO';
 if(n===3)return e.decision;
 if(q.type==='exceto')return e.falsehoods[1][0];
 if(q.type==='associacao'){
  const ordered=e.terms.map((x,i)=>({i,pos:q.stem.indexOf(x[1])}));
  assert.ok(ordered.every(x=>x.pos>=0),q.id);
  const sorted=[...ordered].sort((a,b)=>a.pos-b.pos);
  return ordered.map(x=>String.fromCharCode(65+sorted.findIndex(y=>y.i===x.i))).join(', ');
 }
 if(q.type==='lacunas')return e.terms.map(x=>x[0]).join(' / ');
 if(q.type==='vf'||q.type==='afirmacoes'){
   const claims=[...e.truths.map(([text])=>({text,truth:true})),...e.falsehoods.map(([text])=>({text,truth:false}))];
   const matches=claims.map(x=>({...x,pos:q.stem.indexOf(x.text)})).filter(x=>x.pos>=0).sort((a,b)=>a.pos-b.pos);
   assert.ok(matches.length>=3,q.id);
   const items=matches.slice(0,q.type==='vf'&&n===4?4:3);
   if(q.type==='vf')return items.map(x=>x.truth?'V':'F').join(' – ');
   const good=items.map((x,i)=>x.truth?['I','II','III'][i]:null).filter(Boolean);
   return !good.length?'Nenhuma das assertivas':good.length===3?'Todas as assertivas':'Apenas '+good.join(' e ');
 }
 throw Error(q.type);
}
test('116 resoluções editoriais apontam a alternativa específica, independentemente da posição',()=>{
 assert.equal(qs.length,116);
 for(const q of qs){const n=Number(q.id.slice(-2));const e=expected(q);
  assert.equal(q.options[q.answer],e,`${q.id}: divergência entre referência editorial e opção salva`);
 }
});
test('Comentário correto e comentário incorreto são acompanhados pelo índice original após permutações',()=>{
 for(const q of qs){const order=q.options.map((_,i)=>i);
  for(let offset=0;offset<order.length;offset++){
   const perm=[...order.slice(offset),...order.slice(0,offset)];const correctDisplay=perm.indexOf(q.answer);
   assert.equal(q.options[perm[correctDisplay]],q.options[q.answer]);
   assert.equal(q.optionComments[perm[correctDisplay]],q.optionComments[q.answer]);
   assert.ok(q.optionComments.filter((_,i)=>i!==q.answer).every(c=>c.length>70));
  }
 }
});
test('Exceção EXCETO é única: uma proposição falsa e três verdadeiras segundo referências editoriais',()=>{
 for(const q of qs.filter(q=>q.type==='exceto')){
  const d=editorial[q.subtopicId];assert.equal(q.options[q.answer],d.falsehoods[1][0]);
  assert.deepEqual(new Set(q.options.filter((_,i)=>i!==q.answer)),new Set(d.truths.map(t=>t[0])));
 }
});
test('Sequências de V/F: quatro alternativas únicas, resposta analisada por proposições',()=>{
 for(const q of qs.filter(q=>q.type==='vf')){
  assert.equal(new Set(q.options).size,4,q.id);
  assert.match(q.options[q.answer],/^[VF]( – [VF]){2,3}$/,q.id);
 }
});
test('Estudos de caso: solução retida, três erros diferentes com fundamentos próprios',()=>{
 for(const q of qs.filter(q=>q.id.endsWith('-03'))){const d=editorial[q.subtopicId];
  assert.equal(q.options[q.answer],d.decision);
  assert.deepEqual(new Set(q.options.filter((_,i)=>i!==q.answer)),new Set(d.wrongs.map(x=>x[0])));
  for(const [wrong,reason] of d.wrongs){const i=q.options.indexOf(wrong);assert.ok(q.optionComments[i].includes(reason));}
 }
});
