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
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  addTwoNumbers(l1, l2) {
    let carry = 0;
    let sum = 0;
    let revL1 = l1;
    let revL2 = l2;
    let dummy = new ListNode(0);
    let curr = dummy;
    while (revL1 || revL2 || carry) {
      const a = revL1 ? revL1.val : 0;
      const b = revL2 ? revL2.val : 0;
      sum = a + b + carry;
      carry = Math.floor(sum / 10);
      curr.next = new ListNode(sum % 10, null);
      curr = curr.next;
      revL1 = revL1 ? revL1.next : null;
      revL2 = revL2 ? revL2.next : null;
    }

    return dummy.next;
  }
}
