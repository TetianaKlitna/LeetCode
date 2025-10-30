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
  isBalanced(root) {
    if (!root) return true;

    const inDepth = (node) => {
      if (!node) return 0;

      const leftCnt = inDepth(node.left);
      if (leftCnt === -1) return -1;
      const rightCnt = inDepth(node.right);
      if (rightCnt === -1) return -1;

      if (Math.abs(leftCnt - rightCnt) > 1) return -1;

      return Math.max(leftCnt, rightCnt) + 1;
    };

    return inDepth(root) !== -1;
  }
}
