/** Ensaios aritméticos independentes para exemplos selecionados do INF-09 e INF-10. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { LESSONS } from '../js/data/lessons.js';

test('INF-09-001: extensão B2:D6 contém 15 células',()=>{
 const nLines=6-2+1,nCols=4-2+1;
 assert.equal(nLines*nCols,15);
 assert.match(LESSONS['INF-09-001'].example,/15 células/);
});
test('INF-09-005: precedência diferencia custos e operações incorretas',()=>{
 const correct=3*4+2,wrong=(3+4)*3;
 assert.equal(correct,14);assert.equal(wrong,21);
 assert.notEqual(correct,wrong);
 assert.match(LESSONS['INF-09-005'].example,/14/);
});
test('INF-10-001: soma, média, mínimo e máximo com três números',()=>{
 const data=[10,20,30];const sum=data.reduce((a,b)=>a+b,0);
 assert.deepEqual({sum,average:sum/data.length,min:Math.min(...data),max:Math.max(...data)},
  {sum:60,average:20,min:10,max:30});
});
test('INF-10-002: distinção entre números, textos e células vazias',()=>{
 const a=[12,'Pendente',7,null];
 assert.equal(a.filter(x=>typeof x==='number').length,2);
 assert.equal(a.filter(x=>x!==null&&x!=='').length,3);
 assert.equal(a.filter(x=>x==='Pendente').length,1);
});
test('INF-10-004: SOMASE/MÉDIASE filtram somente RH',()=>{
 const data=[['RH',10],['TI',20],['RH',30]];
 const rh=data.filter(([sector])=>sector==='RH').map(([,value])=>value);
 assert.equal(rh.reduce((a,b)=>a+b,0),40);
 assert.equal(rh.reduce((a,b)=>a+b,0)/rh.length,20);
});
test('INF-10-006: extração de texto e arredondamento',()=>{
 const s='PROTOCOLO';assert.equal(s.slice(0,3),'PRO');assert.equal(s.slice(-4),'COLO');
 assert.equal(Math.round(12.345*100)/100,12.35);
});
test('INF-09-004 e INF-10-003: percentuais e lógica E/OU',()=>{
 assert.equal(0.075*100,7.5);
 const documented=true,attendance=false;
 assert.equal(documented&&attendance,false);
 assert.equal(documented||attendance,true);
});
