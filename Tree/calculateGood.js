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
  goodNodes(root) {
    if (!root) return 0;

    let cnt = 0;

    const calculateGood = (node, max) => {
      if (!node) return 0;

      if (node.val >= max) {
        cnt++;
        max = node.val;
      }

      calculateGood(node.left, max);
      calculateGood(node.right, max);
    };

    calculateGood(root, root.val);

    return cnt;
  }
}
