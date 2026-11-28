/** Conferência textual independente do campo answer. NÃO substitui revisão semântica humana. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { QUESTIONS } from '../js/data/questions.js';
const Q=QUESTIONS.filter(q=>/^Q-INF-(?:06|07|08|09|10)-/.test(q.id));
const roman=['I','II','III'];
const normalized=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[—–]/g,'-').replace(/\s+/g,' ').trim();
function infer(q){
 const x=q.explanation;
 if(q.type==='ce')return /^A afirmação é verdadeira\./.test(x)?0:/^A afirmação é falsa\./.test(x)?1:-1;
 if(q.type==='vf'){
  const found=[...x.matchAll(/\b(I|II|III) = ([VF]):/g)];if(found.length!==3)return -1;
  const v=Object.fromEntries(found.map(m=>[m[1],m[2]]));
  const seq=roman.map(k=>v[k]).join(' - ');return q.options.findIndex(s=>normalized(s)===seq);
 }
 if(q.type==='afirmacoes'){
  const found=[...x.matchAll(/\b(I|II|III) é (verdadeira|falsa):/g)];if(found.length!==3)return -1;
  const truth=Object.fromEntries(found.map(m=>[m[1],m[2]==='verdadeira']));
  const expected=roman.filter(k=>truth[k]);
  return q.options.findIndex(option=>{const terms=[...option.matchAll(/\b(?:I|II|III)\b/g)].map(m=>m[0]);
    return expected.length===terms.length&&expected.every(s=>terms.includes(s));});
 }
 if(q.type==='associacao')return q.options.findIndex(s=>normalized(s)==='1 - 2 - 3');
 if(q.type==='lacunas'){
  const parts=x.replace(/^A sequência se justifica pelas funções distintas: /,'').split('; ').map(p=>p.split(': ')[0]);
  return q.options.findIndex(s=>normalized(s)===normalized(parts.join(' / ')));
 }
 if(q.type==='classica')return q.options.findIndex(option=>x.startsWith(option));
 if(q.type==='exceto'){
  return q.options.findIndex(o=>x.includes('“'+o+'” é falsa porque'));
 }
 return -1;
}
for(const type of ['ce','vf','afirmacoes','associacao','lacunas','classica','exceto']){
 test(`Conferência textual de ${type}: dedução da explicação coincide com a alternativa marcada`,()=>{
  const items=Q.filter(q=>q.type===type);assert.ok(items.length);
  for(const q of items){assert.equal(infer(q),q.answer,`Gabarito diverge da explicação em ${q.id}`);
   const comment=q.optionComments[q.answer];assert.ok(comment.includes('Correta')||comment.includes('EXCETO'),q.id);
  }
 });
}
