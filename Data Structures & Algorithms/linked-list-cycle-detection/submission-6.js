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
        // To solve this problem, I will use Tortoise and Hare approach
        // which will use fast and slow pointers
        let fast = head;
        let slow = head;

        //  I will iterate until we reach the end of the list by using fast pointer
        while (fast !== null && fast.next !== null) {
            // I will move both pointers first before comparing them
            slow = slow.next;
            fast = fast.next.next;

            // After that, I will compare them to find if the is a cycle in current list
            if (slow === fast) return true;
        }
        // If the loop finish without finding any cycle, I will return false
        return false
    }
}
