/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
  /**
   * @param {Node} node
   * @return {Node}
   */
  cloneGraph(node) {
    if (!node) return node;

    const seen = new Map();

    const dfs = (currNode) => {
      if (seen.has(currNode)) return seen.get(currNode);

      const copyNode = new Node(currNode.val);
      seen.set(currNode, copyNode);

      for (let i = 0; i < currNode.neighbors.length; i++) {
        copyNode.neighbors.push(dfs(currNode.neighbors[i]));
      }

      return copyNode;
    };

    return dfs(node);
  }
}
