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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  let parent = null;
  let curr = root;

  while (curr && curr.val !== key) {
    parent = curr;
    curr = curr.val < key ? curr.right : curr.left;
  }

  if (!curr) return root;

  if (!curr.left && !curr.right) {
    if (!parent) return null;
    if (parent.left === curr) parent.left = null;
    if (parent.right === curr) parent.right = null;
    return root;
  }

  if (curr.left && !curr.right) {
    if (!parent) return curr.left;
    if (parent.left === curr) parent.left = curr.left;
    if (parent.right === curr) parent.right = curr.left;
    return root;
  }

  if (!curr.left && curr.right) {
    if (!parent) return curr.right;
    if (parent.left === curr) parent.left = curr.right;
    if (parent.right === curr) parent.right = curr.right;
    return root;
  }

  if (curr.left && curr.right) {
    let nodeParent = curr;
    let node = curr.right;

    while (node.left) {
      nodeParent = node;
      node = node.left;
    }

    curr.val = node.val;
    if (nodeParent.left === node) {
      nodeParent.left = node.right;
    } else if (nodeParent.right === node) {
      nodeParent.right = node.right;
    }
  }

  return root;
};
