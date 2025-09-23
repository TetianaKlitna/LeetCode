/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if(!root) return -1;

        const stack = [];
        let curr = root;

        while(stack.length > 0 || curr !== null){
 
            while(curr){
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack.pop();
            k--;
            if(k === 0) return curr.val;

            curr = curr.right;
            

        }
    }
}
