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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0;

  let cnt = 0;
  const stack = [];
  stack.push([root, []]);

  while (stack.length > 0) {
    let [node, sums] = stack.pop();
    const newSums = [node.val, ...sums.map((sum) => node.val + sum)];

    for (let sum of newSums) {
      if (sum === targetSum) cnt++;
    }

    if (node.left) stack.push([node.left, newSums]);
    if (node.right) stack.push([node.right, newSums]);
  }

  return cnt;
};
