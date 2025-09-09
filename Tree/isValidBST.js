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
   * @return {boolean}
   */
  isValidBST(root) {
    const dfs = (node, low, high) => {
      if (!node) return true;

      if (node.val <= low || node.val >= high) return false;

      return dfs(node.left, low, node.val) && dfs(node.right, node.val, high);
    };

    return dfs(root, -Infinity, Infinity);
  }
}
