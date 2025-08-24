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
var oddEvenList = function (head) {
  if (!head) return null;
  if (!head.next) return head;

  let odd = head;
  let evenHead = head?.next;
  let even = head?.next;

  while (odd.next || even.next) {
    if (odd) odd.next = odd.next?.next || null;
    if (even) even.next = even.next?.next || null;
    if (odd.next) odd = odd.next;
    if (even.next) even = even.next;
  }
  odd.next = evenHead;

  return head;
};
