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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        // To implement insertIntoBST function, these are the steps to follow
        // 1. Define a base case, create an early return if the the current root param is null
        // we can return new TreeNode, this is for when the Tree never exist or when we reach the the leaf node so we have to create Tree node and return it to the previos recursive call stack
        // 2. Compare val with current root's value, whether val is less or greater root's value, we keep call insertIntoBST recursively to find the leaf node and then we place it as the next node
        // 3. after we successfully placed the new node we have to return each node back to the previous recursive call stack until we reach the root node

        // Early return
        if (!root) return new TreeNode(val);

        if (val > root.val) {
            root.right = this.insertIntoBST(root.right, val);
        } else {
            root.left = this.insertIntoBST(root.left, val);
        }

        return root;
    }
}
