/** Validação editorial derivada do conteúdo, sem usar o índice salvo para decidir a resposta. */
import test from 'node:test';import assert from 'node:assert/strict';import{readFileSync}from'node:fs';
import{QUESTIONS}from'../js/data/questions.js';
const base=JSON.parse(readFileSync(new URL('../docs/FASE_D_LOTE_4_BASE_EDITORIAL.json',import.meta.url)));
const qs=QUESTIONS.filter(q=>/^INF-(?:16|17|18|19|20)$/.test(q.moduleId));
const factsOf=entry=>new Map([...entry.facts.map(([t,r])=>[t,true]),[entry.myth[0],false]]);
const classify=(stem,entry)=>{
 const matches=[...stem.matchAll(/(?:^|\n)(I|II|III)\. ([^\n]+)/g)].map(x=>x[2]);
 assert.equal(matches.length,3,'As proposições devem estar explícitas');
 const facts=factsOf(entry);
 for(const c of matches)assert.ok(facts.has(c),`Afirmação não reconhecida: ${c}`);
 return matches.map(c=>facts.get(c));
};
const labelAssert=bits=>{const s=bits.map((b,i)=>b?['I','II','III'][i]:null).filter(Boolean);
 return s.length===3?'Todas as assertivas':s.length===0?'Nenhuma das assertivas':'Apenas '+s.join(' e ');
};
function expected(q){
 const e=base[q.subtopicId],num=Number(q.id.slice(-2));assert.ok(e,q.subtopicId);
 if(q.type==='ce'){
  const statement=q.stem.split('julgue CERTO ou ERRADO: ')[1];
  assert.ok(factsOf(e).has(statement),q.id);
  return factsOf(e).get(statement)?'CERTO':'ERRADO';
 }
 if(num===3)return e.decision[0];
 if(q.type==='exceto')return e.myth[0];
 if(q.type==='lacunas')return e.terms.map(t=>t[0]).join(' / ');
 if(q.type==='classica')return e.terms[0].join(' — ');
 if(q.type==='associacao'){
  const sec=q.stem.split('Coluna II: ')[1].split('\n')[0];
  const match=e.terms.map((term,i)=>{
   const labels=['A','B','C'];const found=labels.filter(l=>sec.includes(`${l}. ${term[1]}`));
   assert.equal(found.length,1,q.id);return `${i+1}-${found[0]}`;
  });return match.join(', ');
 }
 if(['vf','afirmacoes'].includes(q.type)){
  const states=classify(q.stem,e);
  return q.type==='vf'?states.map(x=>x?'V':'F').join(' – '):labelAssert(states);
 }
 throw Error(`Formato não suportado: ${q.type}`);
}
test('120 resoluções reconstruídas sem consultar q.answer coincidem com o texto correto salvo',()=>{
 assert.equal(qs.length,120);
 for(const q of qs)assert.equal(q.options[q.answer],expected(q),q.id);
});
test('C/E e EXCETO: a afirmação verdadeira/falsa determina o gabarito',()=>{
 for(const q of qs.filter(q=>['ce','exceto'].includes(q.type))){const e=base[q.subtopicId];
  if(q.type==='ce')assert.equal(q.options[q.answer],expected(q));
  else{assert.equal(q.options[q.answer],e.myth[0]);assert.deepEqual(new Set(q.options.filter((_,i)=>i!==q.answer)),new Set(e.facts.map(t=>t[0])));}
 }
});
test('Questões de caso: uma solução fundamentada e três alternativas rejeitadas por motivos específicos',()=>{
 for(const q of qs.filter(q=>q.id.endsWith('-03'))){const e=base[q.subtopicId];assert.equal(q.options[q.answer],e.decision[0]);
  for(const [action,why] of e.wrongs){const i=q.options.indexOf(action);assert.notEqual(i,-1,q.id);assert.ok(q.optionComments[i].includes(why),q.id);}
 }
});
test('Embaralhamento simulado preserva gabarito e comentário original para todos os itens',()=>{
 for(const q of qs){const ids=q.options.map((_,i)=>i);
  for(let shift=0;shift<ids.length;shift++){
   const order=ids.slice(shift).concat(ids.slice(0,shift));
   const shown=order.indexOf(q.answer);
   assert.equal(q.options[order[shown]],expected(q));
   assert.equal(q.optionComments[order[shown]],q.optionComments[q.answer]);
  }
 }
});
