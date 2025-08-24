/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let firstPointer = head;
  let secondPointer = head;

  let node = null;

  while (secondPointer && secondPointer.next) {
    secondPointer = secondPointer.next?.next;

    const nextNode = firstPointer.next;
    firstPointer.next = node;
    node = firstPointer;

    firstPointer = nextNode;
  }
  let max = -Infinity;
  while (firstPointer && node) {
    max = Math.max(max, firstPointer.val + node.val);
    firstPointer = firstPointer.next;
    node = node.next;
  }

  return max;
};
