/** INF-ESTUDO — validação de identidade pedagógica; sem acesso a armazenamento.
 * Examina identificadores, não enunciados, comentários ou textos livres.
 */
const object = value => value !== null && typeof value === 'object';
const FOREIGN_TOKEN = /(?:^|[:|/])(?:Q-(?:(?:REAL|AUT|AUTORAL)-)?(?:ADM|AP|DA|POR|RED)-\d+|(?:ADM|AP|DA|POR|RED)-\d+)(?=$|[-:|/])/i;
const FOREIGN_AREA = /^(?:ADM|AP|DA|POR|RED)$/i;
const FOREIGN_APP = /^(?:pt-estudo|adm-estudo|dir-adm)$/i;
const ID_FIELDS = /(?:^id$|^ids$|^qid$|^key$|^module$|^scope$|Id$|Ids$)/i;
const ID_ARRAYS = /(?:^ids$|Ids$|^questions$|^reviewQueue$)/i;
const MAX_NODES = 500000;
const MAX_DEPTH = 64;
const MAX_ISSUES = 12;
const badIdentifier = value => typeof value === 'string' && FOREIGN_TOKEN.test(value.trim());
const pathPart = key => /^[a-z_$][\w$]*$/i.test(key)
  ? '.' + key : '[' + JSON.stringify(key.slice(0, 70)) + ']';

export function inspectProgressIdentity(state) {
  const issues = [];
  const push = path => { if (issues.length < MAX_ISSUES) issues.push(path.slice(0, 220)); };
  if (typeof state?.appId === 'string' && state.appId !== 'inf-estudo') push('state.appId');
  const stack = [];
  if (object(state?.progress)) stack.push({value:state.progress,path:'state.progress',depth:0,idArray:false});
  if (object(state?.navigation)) stack.push({value:state.navigation,path:'state.navigation',depth:0,idArray:false});
  const visited = new WeakSet();
  let inspected = 0, truncated = false;
  while (stack.length && issues.length < MAX_ISSUES) {
    const node = stack.pop();
    if (++inspected > MAX_NODES || node.depth > MAX_DEPTH) {truncated = true;break;}
    const value = node.value;
    if (typeof value === 'string') {
      if (node.idArray && badIdentifier(value)) push(node.path);
      continue;
    }
    if (!object(value)) continue;
    if (visited.has(value)) continue;
    visited.add(value);
    if (Array.isArray(value)) {
      for (let index = value.length-1; index>=0; index--)
        stack.push({value:value[index],path:node.path+'['+index+']',depth:node.depth+1,idArray:node.idArray});
      continue;
    }
    for (const [key, child] of Object.entries(value)) {
      const path=node.path+pathPart(key);
      if (badIdentifier(key)) push(path);
      if (typeof child === 'string') {
        if ((ID_FIELDS.test(key) || node.idArray) && badIdentifier(child)) push(path);
        if (key === 'area' && FOREIGN_AREA.test(child.trim())) push(path);
        if (key === 'appId' && FOREIGN_APP.test(child.trim())) push(path);
      }
      if (object(child)) stack.push({value:child,path,depth:node.depth+1,
        idArray:Array.isArray(child) && ID_ARRAYS.test(key)});
    }
  }
  if (truncated) push('state.progress: limite de verificação atingido');
  return {ok:issues.length===0 && !truncated,issues,inspected,truncated};
}
