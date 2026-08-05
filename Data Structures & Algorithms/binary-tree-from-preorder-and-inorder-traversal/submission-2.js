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
        // We don't need to iterate every times we need to find index of current node value, we can store each inorder element in the Hash Map
        const inorderMap = {};
        for (let i = 0; i < inorder.length; i++) {
            // Collect the indices
            inorderMap[inorder[i]] = i;
        }

        let preIdx = 0;

        const helper = (inStart, inEnd) => {
            if (inStart > inEnd) return null; // There is no more node to be created for current branch

            const rootVal = preorder[preIdx++]; // Get the current node valie then increment preIdx by 1
            const root = new TreeNode(rootVal);
            const rootIdx = inorderMap[rootVal]; // We will use this index to determine how many node we need to keep adding on each side

            // Start index should be the same as previous call stack because we will keep adding node until we reach the last node at left
            // End index will the index before current root index because we will keep adding node at the left side start from this End index
            root.left = helper(inStart, rootIdx - 1);

            // Start index should rootIdx + 1 because we be adding node at the right side start from the index next to rootIdx
            // End index will be the same as previous call stack because we will keep adding nodes until we reach this index
            root.right = helper(rootIdx + 1, inEnd);

            // We need to return the current node back to the previous call stack until it reach the root node (Top of the Tree)
            return root;
        };

        return helper(0, inorder.length - 1);

        // So the Time complexity is O(log n) on average, but the worst case is O(n) if the Tree become skewed.
        // The Space complexity is O(log n) on average the worst case will be O(n) too if the tree become skewed like the Time complexity
    }
}
