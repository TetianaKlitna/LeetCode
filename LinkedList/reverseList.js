/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let node = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = node;
    node = curr;
    curr = next;
  }

  return node;
};
