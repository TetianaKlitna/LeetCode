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
   * @return {number[]}
   */
  rightSideView(root) {
    if (!root) return [];
    const res = [];
    const stack = [];
    stack.push(root);

    while (stack.length) {
      let size = stack.length;
      for (let i = 0; i < size; i++) {
        const curr = stack.shift();
        if (curr) {
          if (curr.left) stack.push(curr.left);
          if (curr.right) stack.push(curr.right);
          if (i === size - 1) res.push(curr.val);
        }
      }
    }

    return res;
  }
}
