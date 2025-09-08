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
   * @return {TreeNode}
   */
  invertTree(root) {
    const invert = (node) => {
      [node.left, node.right] = [node.right, node.left];

      if (node.left) invert(node.left);
      if (node.right) invert(node.right);
    };

    if (!root) return root;

    invert(root);
    return root;
  }
}
