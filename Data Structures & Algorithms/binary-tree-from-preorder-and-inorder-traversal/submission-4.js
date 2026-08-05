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

        // inStart 4, inEnd 3
        const helper = (inStart, inEnd) => {
            if (inStart > inEnd) return null; // There is no more node to be created for current branch

            // Get the current node valie then increment preIdx by 1
            const rootVal = preorder[preIdx++]; // rootVal = 4, preIdx = 4
            const root = new TreeNode(rootVal);
            // We will use this index to determine how many node we need to keep adding on each side
            const rootIdx = inorderMap[rootVal]; // 3

            // Start index should be the same as previous call stack because we will keep adding node until we reach the last node at left
            // End index will the index before current root index because we will keep adding node at the left side start from this End index
            root.left = helper(inStart, rootIdx - 1); // Start 0, End 0 -1 = -1

            // Start index should rootIdx + 1 because we be adding node at the right side start from the index next to rootIdx
            // End index will be the same as previous call stack because we will keep adding nodes until we reach this index
            root.right = helper(rootIdx + 1, inEnd); // Start 3 + 1 = 4, End 3 (The last index of inorder array)

            // We need to return the current node back to the previous call stack until it reach the root node (Top of the Tree)
            return root; // every node will be returned back to the top
        };

        return helper(0, inorder.length - 1);

        // Dry run
        // preorder = [1,2,3,4], inorder = [2,1,3,4]
        // left [2]
        // right [3,4]

        // The Time complexity is O(n) always, we must visit and construct every single node at once, plus O(n) to build a Hash Map initially, the Tree shape doesn't affect the time complexity.
        // The Space complexity is O(log n) on average the worst case will be O(n) too if the tree become skewed like the Time complexity
    }
}
