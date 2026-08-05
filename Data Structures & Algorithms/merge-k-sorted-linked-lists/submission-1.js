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

    mergeTwoLists(list1, list2) {
        if (!list1) return list2;
        if (!list2) return list1;

        let newList = new ListNode(-1);
        let curr = newList;
        let left = list1;
        let right = list2;

        while (left && right) {
            if (left.val >= right.val) {
                curr.next = right;
                right = right.next;
            } else {
                curr.next = left;
                left = left.next;
            }

            curr = curr.next;
        }

        if (right) curr.next = right;
        if (left) curr.next = left;

        return newList.next;
    }

    mergeKLists(lists) {
        if (lists.length === 0) return null;

        if (lists.length === 1) return lists[0];

        let mid = Math.floor(lists.length / 2);
        let leftSide = lists.slice(0, mid);
        let rightSide = lists.slice(mid);

        console.log("leftSide", leftSide);
        console.log("rightSide", rightSide);

        let l1 = this.mergeKLists(leftSide);
        let r1 = this.mergeKLists(rightSide);

        return this.mergeTwoLists(l1, r1);
    }
}
