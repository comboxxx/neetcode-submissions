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
     * @return {ListNode}
     */
    middleNode(head) {
        let slow = head;
        let fast = head;

        while (fast) {
            if (!fast.next) break;
            slow = slow.next;

            fast = fast.next.next;
        }

        return slow;
    }
}
