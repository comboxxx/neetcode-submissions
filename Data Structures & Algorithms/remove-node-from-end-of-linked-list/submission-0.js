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
        const dummy = new ListNode(-1);
        dummy.next = head;
        let fast = dummy;
        let slow = dummy;

        let i = 0;
        while (i < n && fast.next) {
            fast = fast.next;
            i++;
        }

        while (fast && fast.next) {
            fast = fast.next;
            slow = slow.next;
        }

        slow.next = slow.next.next;

        return dummy.next;
    }
}
