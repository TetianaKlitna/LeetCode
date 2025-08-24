/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;

  const leafs = [];
  const stack = [];
  stack.push(root1);
  while (stack.length > 0) {
    const item = stack.pop();
    if (item.left === null && item.right === null) {
      leafs.push(item.val);
      continue;
    }
    if (item.left) stack.push(item.left);
    if (item.right) stack.push(item.right);
  }

  stack.push(root2);
  let i = 0;
  while (stack.length > 0) {
    const item = stack.pop();
    if (item.left) stack.push(item.left);
    if (item.right) stack.push(item.right);
    if (item.left === null && item.right === null) {
      if (item.val !== leafs[i]) return false;
      i++;
    }
  }

  return leafs.length === i;
};
