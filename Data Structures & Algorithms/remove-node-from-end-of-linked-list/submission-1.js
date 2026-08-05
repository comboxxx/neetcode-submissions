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
        // To solve this problm, I will use two-pointers approach (Fast & Slow)
        // But first let me create a dummy node to prevent edgecase when head is only include one node and we can't remove it
        const dummy = new ListNode(-1);
        // I will connect dummy node with all other nodes in the head
        dummy.next = head;

        // Next, let's create fast and slow pointers
        // Both node will start from the dummy node because we will soon iterate untile the slow pointer reach to the node before the node that we have to remove
        // then we will remove its next node
        let fast = dummy;
        let slow = dummy;

        let i = 0;
        // I will iterate n times to move the fast pointer first
        while (i < n && fast.next) {
            fast = fast.next;
            i++;
        }

        // Next, I will iterate until there is no next node infront of fast pointer
        while (fast && fast.next) {
            fast = fast.next;
            slow = slow.next;
        }

        // After the loop finish, the slow pointer will stop at the node before the node that we need to remove
        // So we can remove the next node

        slow.next = slow.next.next;

        // Then we can return the remaning nodes
        return dummy.next;

        // The Time complexity is O(n) because we traverse thorugh each node in the list once
        // The Space complexity is O(1) because we updated data in-place of the original list
    }
}
