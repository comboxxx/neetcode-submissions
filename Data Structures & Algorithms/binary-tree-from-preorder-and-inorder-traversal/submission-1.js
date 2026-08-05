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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const inorderMap = {};

        for (let i = 0; i < inorder.length; i++) {
            inorderMap[inorder[i]] = i;
        }

        let preIdx = 0;

        const helper = (inStart, inEnd) => {
            if (inStart > inEnd) return null;

            let rootVal = preorder[preIdx++];
            let root = new TreeNode(rootVal);
            let rootIdx = inorderMap[rootVal];

            root.left = helper(inStart, rootIdx - 1);
            root.right = helper(rootIdx + 1, inEnd);

            return root;
        };

        return helper(0, inorder.length - 1);
    }
}
