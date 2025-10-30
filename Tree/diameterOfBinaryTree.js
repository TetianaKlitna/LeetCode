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
   * @return {number}
   */
  diameterOfBinaryTree(root) {
    if (!root) return 0;

    let best = 0;

    const longestPath = (node) => {
      if (!node) return 0;

      const l = longestPath(node.left);
      const r = longestPath(node.right);
      best = Math.max(best, l + r);

      return Math.max(l, r) + 1;
    };
    longestPath(root);
    return best;
  }
}
