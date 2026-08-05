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
        let newList = new ListNode(-1);
        let curr = newList;
        let left = list1;
        let right = list2;

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

        return newList.next;
    }
    mergeKLists(lists) {
        if (!lists || lists.length === 0) return null;
        if (lists.length === 1) return lists[0];

        let mid = Math.floor(lists.length / 2);
        let leftSide = this.mergeKLists(lists.slice(0, mid));
        let rightSide = this.mergeKLists(lists.slice(mid));

        return this.mergeTwoList(leftSide, rightSide);
    }
}
