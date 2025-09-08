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
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    let curr = head;
    let cnt = 0;
    while (curr) {
      cnt++;
      curr = curr.next;
    }
    let forRemove = cnt - n;
    if (forRemove === 0) return head.next;
    let i = 0;
    curr = head;
    while (curr) {
      if (i + 1 === forRemove) {
        curr.next = curr.next.next;
        break;
      }
      i++;
      curr = curr.next;
    }
    return head;
  }
}
