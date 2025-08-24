/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  if (!root) return 0;

  const stack = [];
  stack.push([root, root.val]);
  let cnt = 0;

  while (stack.length > 0) {
    const [node, max] = stack.pop();
    if (max <= node.val) {
      cnt++;
    }
    if (node.left) stack.push([node.left, Math.max(max, node.left.val)]);
    if (node.right) stack.push([node.right, Math.max(max, node.right.val)]);
  }

  return cnt;
};
