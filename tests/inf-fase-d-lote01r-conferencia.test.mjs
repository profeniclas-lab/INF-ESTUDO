/** Fase D 1-R — conferência cruzada de conteúdo textual e gabarito.
 * Não substitui verificação semântica por especialista externo.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import {QUESTIONS} from '../js/data/questions.js';
const roman=['I','II','III'];
const truth=explanation=>Object.fromEntries([...explanation.matchAll(/\b(I|II|III)\s*[:=]\s*([VF])\b/g)].map(m=>[m[1],m[2]==='V']));
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[—–]/g,'-').replace(/\s+/g,' ').trim();
function infer(q){
 if(q.type==='ce'){
  if(/A proposição é verdadeira/i.test(q.explanation))return 0;
  if(/A proposição é falsa/i.test(q.explanation))return 1;
 }
 if(q.type==='vf'){
  const t=truth(q.explanation);
  if(Object.keys(t).length===3){const seq=roman.map(x=>t[x]?'V':'F').join(' - ');
   return q.options.findIndex(opt=>normalize(opt)===seq);}
 }
 if(q.type==='afirmacoes'){
  const t=truth(q.explanation);
  if(Object.keys(t).length===3){const good=roman.filter(x=>t[x]);
   return q.options.findIndex(o=>{
    const words=[...o.matchAll(/\b(?:I|II|III)\b/g)].map(m=>m[0]);
    if(!good.length)return /nenhuma/i.test(o);
    return good.length===words.length&&good.every(x=>words.includes(x));
   });
  }
 }
 if(q.type==='exceto'){
  const match=q.explanation.match(/Ela afirma «([^»]+)»/);
  if(match)return q.options.findIndex(x=>x===match[1]);
 }
 if(q.type==='classica'||q.type==='lacunas'){
  return q.options.findIndex(x=>q.explanation.startsWith(x));
 }
 if(q.type==='associacao'){
  // Essa checagem usa a explicação correspondente ao mapeamento correto;
  // não deve ser confundida com resolução independente de conteúdo.
  return q.optionComments.findIndex(x=>x.startsWith('Correta:'));
 }
 return -1;
}
for(const type of ['ce','vf','afirmacoes','associacao','lacunas','classica','exceto']){
 test(`Conferência cruzada de ${type}: gabarito corresponde à resolução textual`,()=>{
  const qs=QUESTIONS.filter(q=>q.type===type);assert.ok(qs.length);
  for(const q of qs){const predicted=infer(q);assert.equal(predicted,q.answer,`${q.id}: resposta textual e índice divergem`);
   assert.equal(q.optionComments.length,q.options.length,q.id);
   assert.ok(q.optionComments[q.answer].length>35,q.id);
  }
 });
}
