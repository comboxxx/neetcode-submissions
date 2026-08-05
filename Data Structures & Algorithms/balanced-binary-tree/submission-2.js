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
     * @return {boolean}
     */

    // constructor() {
    //     this.left = 0;
    //     this.right = 0;
    // }
    isBalanced(root) {
        const inorder = (root) => {
            if (!root) return 0;
            if (!root.left && !root.right) return 1;

            let leftHeight = inorder(root.left);
            let rightHeight = inorder(root.right);

            if (Math.abs(leftHeight - rightHeight) > 1 || leftHeight === -1 || rightHeight === -1) {
                return -1;
            }

            return 1 + Math.max(leftHeight, rightHeight);
        };

        return inorder(root) !== -1;
    }
}
