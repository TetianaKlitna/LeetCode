/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number[][]}
   */
  levelOrder(root) {
    const res = [];

    const dfs = (node, lvl) => {
      if (!node) return;

      if (res.length === lvl) {
        res.push([]);
      }
      res[lvl].push(node.val);

      dfs(node.left, lvl + 1);
      dfs(node.right, lvl + 1);
    };

    dfs(root, 0);
    return res;
  }
}
