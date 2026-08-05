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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeTwoList(list1, list2) {
        if (!list1) return list2;
        if (!list2) return list1;

        let left = list1;
        let right = list2;

        let sortedList = new ListNode(-1);
        let curr = sortedList;

        while (left && right) {
            if (left.val <= right.val) {
                curr.next = left;
                left = left.next;
            } else {
                curr.next = right;
                right = right.next;
            }
            curr = curr.next;
        }

        if (left) curr.next = left;
        if (right) curr.next = right;

        return sortedList.next
    }
    mergeKLists(lists) {
        if (!lists || lists.length === 0) return null;
        if (lists.length === 1) return lists[0];

        const mid = Math.floor(lists.length / 2);
        const leftSide = lists.slice(0, mid);
        const rightSide = lists.slice(mid);

        const l1 = this.mergeKLists(leftSide);
        const l2 = this.mergeKLists(rightSide);

        return this.mergeTwoList(l1, l2);
    }
}
