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
        // 6. I will check if the current node has left and right child, if the right child does exist, I will push the right child value into the result array
        // if the right child doesn't exist I will check the left child, if it does exist, I will push the left child value into the result array instead
        // I will also push both children into the queue so we can continue check other children nodes at the next level
        // 7. After the loops finished, I will return the result array

        // Let's implement
        const res = [];
        const queue = [];
        if (root) {
            queue.push(root);
        }

        while (queue.length > 0) {
            const levelLength = queue.length;
            const subList = [];
            for (let i = 0; i < levelLength; i++) {
                const curr = queue.shift();
                subList.push(curr.val);

                if (curr.left) {
                    queue.push(curr.left);
                }

                if (curr.right) {
                    queue.push(curr.right);
                }
            }

            if (subList.length > 0) res.push(subList[subList.length - 1]);
        }

        return res;

        // So The Time complexity is O(n) because we must visit each node exactly once
        // The Space complexity is O(n) when the tree is balanced (or perfect), the queue will hold all the large amount of node at the bottom level, which contains roughly half of the total amount (~n/2)
        // The Best case is O(1) is the tree is a skewed tree, the queue will only hold 1 node at any given time becaues we always shift the processed node before pushing the child node.
    }
}
