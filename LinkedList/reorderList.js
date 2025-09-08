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
   * @return {void}
   */
  reorderList(head) {
    if (!head.next) return head;

    //median of linked list
    let mid = head;
    let second = head;
    let prev = null;
    while (mid && second && second.next) {
      prev = mid;
      mid = mid.next;
      second = second.next.next;
    }
    if (prev) prev.next = null;

    //reverse median list
    let reverse = null;
    while (mid) {
      const nextNode = mid.next;
      mid.next = reverse;
      reverse = mid;
      mid = nextNode;
    }

    //merged
    let dummy = { val: 0, next: null };
    let merged = dummy;
    let curr = head;
    let i = 0;
    while (curr && reverse) {
      if (i % 2 === 0) {
        merged.next = curr;
        curr = curr.next;
      } else {
        merged.next = reverse;
        reverse = reverse.next;
      }
      i++;
      merged = merged.next;
    }
    if (curr) merged.next = curr;
    if (reverse) merged.next = reverse;

    return dummy.next;
  }
}
