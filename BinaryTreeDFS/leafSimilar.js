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
  const isLeaf = (node) => {
    return node.left === null && node.right === null;
  };

  const leafs = (node, out) => {
    if (!node) return;

    if (isLeaf(node)) out.push(node.val);

    leafs(node.left, out);
    leafs(node.right, out);
  };

  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;

  const arrLeafs1 = [];
  leafs(root1, arrLeafs1);

  const arrLeafs2 = [];
  leafs(root2, arrLeafs2);

  if (arrLeafs1.length !== arrLeafs2.length) return false;

  for (let i = 0; i < arrLeafs1.length; i++) {
    if (arrLeafs1[i] !== arrLeafs2[i]) return false;
  }

  return true;
};
