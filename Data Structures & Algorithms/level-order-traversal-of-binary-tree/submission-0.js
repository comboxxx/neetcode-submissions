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
     * @return {number[][]}
     */
    levelOrder(root) {
        let queue = [];
        const res = [];

        if (root) {
            queue.push(root);
        }

        while (queue.length > 0) {
            let levelLength = queue.length;
            const sublist = [];

            for (let i = 0; i < levelLength; i++) {
                let curr = queue.shift();
                sublist.push(curr.val);
                // queue.push(curr);
                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
            }
            res.push(sublist);
        }

        return res;
    }
}
