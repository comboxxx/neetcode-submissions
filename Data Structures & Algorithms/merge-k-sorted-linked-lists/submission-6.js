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

    // I will implement the merge sort function

    mergeTwoList(left, right) {
        // I will place the early return logic
        // If left list is not valid, I will return right list
        // If right list is not valid, I will return left list
        if (!left) return right;
        if (!right) return left;

        // This is the temporary node with the dummy node
        const newList = new ListNode(-1);
        // I will create a pointer for updating sorted values
        let curr = newList;

        // I will iterate until one of the list reach the end of the list
        while (left && right) {
            // let's write the comparison logic, since we are going to sort in ascending order
            // We need to compare both left and right node from the lists
            // to get the current lowest value and put the selected node to our temporary list
            if (left.val <= right.val) {
                curr.next = left;
                left = left.next;
            } else {
                curr.next = right;
                right = right.next;
            }

            curr = curr.next;
            // For every loop, we have to move the current pointer by 1
        }

        // After the loop finished, I will check if there is any list still have remaining nodes to add
        // to the temporary list, If it does exist, I will put all the remaining nodes to the temp list
        if (left) curr.next = left;
        if (right) curr.next = right;

        // Finally, I will return the temp list without dummy node
        return newList.next;
    }

    mergeKLists(lists) {
        // To solve this problem, I will use Devide and Conquer approach

        // First, I will define the base casee for this problem
        // If the array is not valid or empty, so I will return null
        if (!lists || lists.length === 0) return null;

        // If the size of array is 1, I will return the first index of array
        if (lists.length === 1) return lists[0];

        // Next, I will cut the array in half
        // First, I need to find the middle index of an array
        const mid = Math.floor(lists.length / 2);
        // Now, let's assign the first half at the left
        let leftSide = lists.slice(0, mid);
        // Next, let's assign the second half at right
        let rightSide = lists.slice(mid);

        // Next, I will execute mergeKLists function for both left side and right side
        // so It will trigger a recursion until both side hit the base case
        // then it will start sorting from the bottom to the top
        let l1 = this.mergeKLists(leftSide);
        let r1 = this.mergeKLists(rightSide);

        // After we have reach the base case, l1 and r1 should be the list those are ready to be merged now

        return this.mergeTwoList(l1, r1);
    }

    // The Time complexity is O(n log k) because we are using Devide and Conquer approach
    // The Space complexity is O(log k) due to the call stack dept in devide and conquer
    // where k is the number of linked lists
}
