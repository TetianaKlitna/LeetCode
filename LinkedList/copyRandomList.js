// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
  /**
   * @param {Node} head
   * @return {Node}
   */
  copyRandomList(head) {
    const map = new Map();
    let dummy = new Node(0);
    let copy = dummy;
    let curr = head;
    while (curr) {
      copy.next = new Node(curr.val, null, curr.random);
      map.set(curr, copy.next);
      curr = curr.next;
      copy = copy.next;
    }
    copy = dummy.next;
    while (copy) {
      const oldRandom = copy.random;
      copy.random = map.get(oldRandom);
      copy = copy.next;
    }
    return dummy.next;
  }
}
