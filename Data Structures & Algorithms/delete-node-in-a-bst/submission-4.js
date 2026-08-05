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
     * @param {number} key
     * @return {TreeNode}
     */
    findMinNode(root) {
        let curr = root;
        while (curr && curr.left) {
            curr = curr.left;
        }

        return curr;
    }
    deleteNode(root, key) {
        if (!root) return null;

        if (key > root.val) {
            root.right = this.deleteNode(root.right, key);
        } else if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
        } else {
            if (!root.left) return root.right;
            if (!root.right) return root.left;

            const minNode = this.findMinNode(root.right);
            root.val = minNode.val;
            root.right = this.deleteNode(root.right, minNode.val);
        }

        return root;
    }
}
