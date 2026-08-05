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
     * @return {number[]}
     */
    rightSideView(root) {
        // As I can see we need to check each node from each level, first we need to check the right node, if the right node does exist
        // we pick the right node, but if not, we check if the left node exist and then push the left node instead.
        // So the solve this problem, I will use a Breadth-First search approach with the queue data structure.
        // I'm going to traverse each node in level order to check which node I need to pick
        // 1. I will check if the root node does exist, if yes I will put it into the queue
        // 2. I will declare a result array for collecting the values
        // 3. I will use while loop to iterate while the length of queue is greater than 0
        // 4. I will declare level length variable to store the current queue length, this ensure the inner loop always run k times which represent to level length
        // 5. I will process the current node in the queue and shift it immediately and use the auxiliary variable to store the current node
        // 6. I will check if the current processed node has the left and right child then I will push all children into the queue
        // 7. At the last loop of the inner loop (i === levelLength-1) I will push the current node into the result array
        // 8. After the loop finished, I will return result array

        // Let's implement

        const queue = [];
        const res = [];

        if (root) queue.push(root);

        while (queue.length > 0) {
            const levelLength = queue.length; // To prevent the length of the current level change unexpectedly
            for (let i = 0; i < levelLength; i++) {
                const curr = queue.shift();

                // We are goin to push the value of the right node
                // If we are at the 2nd level, we can store all node values like [2,3]
                // If we are at 3rd level we have data like [4]

                if (i === levelLength - 1) res.push(curr.val); // We don't have to delcare another array variable

                // Becase we push both left and right node into the queue, we can check all levels and collect the right values of all level
                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
            }
        }

        return res;

        // So The Time complexity is O(n) because we must visit each node exactly once
        // The Space complexity is O(n) when the tree is balanced (or perfect), the queue will hold all the large amount of node at the bottom level, which contains roughly half of the total amount (~n/2)
        // The Best case is O(1) is the tree is a skewed tree, the queue will only hold 1 node at any given time becaues we always shift the processed node before pushing the child node.
    }
}
