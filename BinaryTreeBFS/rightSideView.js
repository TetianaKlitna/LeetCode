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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];

  const res = [];
  let prevLevel = -1;
  const stack = [];
  stack.push([root, 0]);
  for (let i = 0; i < stack.length; i++) {
    let [node, level] = stack[i];

    if (prevLevel !== level) {
      prevLevel = level;
      res.push(node.val);
    }

    if (node.left || node.right) level++;

    if (node.right) stack.push([node.right, level]);
    if (node.left) stack.push([node.left, level]);
  }

  return res;
};
