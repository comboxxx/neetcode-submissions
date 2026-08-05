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
    constructor() {
        this.res = [];
    }
    inorderTraversal(root) {
        if (!root) return this.res;

        this.inorderTraversal(root.left);
        this.res.push(root.val);
        this.inorderTraversal(root.right);

        return this.res;
    }
}
