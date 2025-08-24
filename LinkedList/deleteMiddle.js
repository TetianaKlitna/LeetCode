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
var deleteMiddle = function (head) {
  if (head.next === null) return null;

  let firstPointer = head;
  let secondPointer = head.next?.next;
  while (secondPointer !== null && secondPointer.next !== null) {
    prev = firstPointer;
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next.next;
  }
  firstPointer.next = firstPointer.next.next;

  return head;
};
