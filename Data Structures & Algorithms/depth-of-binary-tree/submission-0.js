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
        // let depth = 0;

        const helper = (node, level) => {
            if (!node) return 0;
            node.left = helper(node.left, level + 1);
            node.right = helper(node.right, level + 1);

            return 1 + Math.max(node.left, node.right);
        };

        return helper(root, 1);

        // return depth;
    }
}
