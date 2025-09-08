/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @return {boolean}
   */
  hasCycle(head) {
    let firstPointer = head;
    let secondPointer = head;
    while (firstPointer && secondPointer && secondPointer.next) {
      firstPointer = firstPointer.next;
      secondPointer = secondPointer.next.next;
      if (firstPointer === secondPointer) return true;
    }
    return false;
  }
}
