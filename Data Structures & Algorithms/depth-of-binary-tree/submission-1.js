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
     * @return {number}
     */
    maxDepth(root) {
        let queue = [];

        if (root) queue.push(root);

        let level = 0;
        while (queue.length > 0) {
            let levelLength = queue.length;
            for (let i = 0; i < levelLength; i++) {
                let curr = queue.shift();
                console.log(curr.val);
                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
            }
            level++;
        }

        return level;
    }

    // maxDepth(root) {
    //     const helper = (node, level) => {
    //         if (!node) return 0;
    //         node.left = helper(node.left, level + 1);
    //         node.right = helper(node.right, level + 1);

    //         return 1 + Math.max(node.left, node.right);
    //     };

    //     return helper(root, 1);
    // }
}
