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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;

        const inorder = (root) => {
            if (!root) return null;
            let leftRes = inorder(root.left);
            if (leftRes !== null) return leftRes;
            count++;

            if (count === k) return root.val;

            return inorder(root.right);
        };

        return inorder(root);
    }
}
