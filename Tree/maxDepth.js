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
  maxDepth(root) {
    if (!root) return 0;
    let maxDepth = 0;

    const inDepth = (node, depth) => {
      if (!node) return depth;

      depth++;

      maxDepth = Math.max(maxDepth, depth);

      inDepth(node.left, depth);
      inDepth(node.right, depth);
    };

    inDepth(root, 0);

    return maxDepth;
  }
}
