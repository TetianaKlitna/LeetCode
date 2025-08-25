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
var maxLevelSum = function (root) {
  let sums = [];
  const stack = [[root, 1]];

  for (let i = 0; i < stack.length; i++) {
    let [node, level] = stack[i];

    sums[level - 1] = (sums[level - 1] || 0) + node.val;

    if (node.left || node.right) level++;
    if (node.left) stack.push([node.left, level]);
    if (node.right) stack.push([node.right, level]);
  }

  let maxInd = 0;
  for (let i = 0; i < sums.length; i++) {
    if (sums[maxInd] < sums[i]) maxInd = i;
  }
  return maxInd + 1;
};
