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
   * @param {TreeNode} subRoot
   * @return {boolean}
   */
  isSubtree(root, subRoot) {
    const isSame = (p, q) => {
      if (!p && !q) return true;
      if ((!p && q) || (p && !q)) return false;
      if (p.val !== q.val) return false;

      return isSame(p.left, q.left) && isSame(p.right, q.right);
    };

    const dfs = (node) => {
      if (!node) return false;
      return isSame(node, subRoot) || dfs(node.left) || dfs(node.right);
    };

    return dfs(root);
  }
}
