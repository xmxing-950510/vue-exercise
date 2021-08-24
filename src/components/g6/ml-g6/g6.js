/**
 * 增强g6 注册新的行为
 */
import G6 from '@antv/g6'
import edges from './edges/index'

console.log('before G6', G6);
console.log(edges, edges.length);

if(edges) {
  for(const item of edges) {
    G6.registerEdge(item.name, item.config, item.extend)
  }
}
console.log('after G6', G6);

export default G6