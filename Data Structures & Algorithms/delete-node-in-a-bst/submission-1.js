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
    // I will implement the get minimum node function
    getMinNode(root) {
        let curr = root;
        // We will travaerse through the left side until we find the min node of the Tree
        while (curr && curr.left) {
            curr = curr.left; // We move curr pointer to the left side
        }

        return curr;
    }
    deleteNode(root, key) {
        // To delete node from a BST, we have to follow these steps
        // 1. Make an early return condition, this condition will prevent deleting node from an empty Tree and to return the result when expected value is not include in the Tree
        // 2. We need to write a condition to handle 2 cases, the first case is when we trying to delete a leaf node or a node that have only one descendant. The second case is current node have both left and right descendant
        // 3. For the first case is not complex we just have to check if current node we are deleting have 0 descendant, we just need to return the node at right which is null, so this is how we remove the node for the first case
        // even the current node have 1 descendant (left or right) we will return the side that have a node exist, so by doing this, we still able to achieve deleting current node
        // 4. If the current node we're trying to delete have both left and right descendant, we will have to find  the minimum node at the right side because we need to replace current node's value with the minimum node's valiue
        // 5. then we can remove the minimum node at the bottom of the right side
        // 6. we need to have a return node statement at the bottom of the function to update every node back to the root node (Top of the recursive call stack)

        if (!root) return null;

        if (key > root.val) {
            root.right = this.deleteNode(root.right, key); // Continue finding on the right side
        } else if (key < root.val) {
            root.left = this.deleteNode(root.left, key); // Continue finding on the left side
        } else {
            // This is when we find the expected node we want to delete
            // We have to check both and right
            if (!root.left) return root.right;
            else if (!root.right) return root.left; // This is done for the first case (0 or 1 child)

            // The Second case - When the node we want to delete have both left and right child
            // We need to find the minimum node from the right side
            const minNode = this.getMinNode(root.right);
            root.val = minNode.val; // Update current deleting node value to min node value
            root.right = this.deleteNode(root.right, minNode.val); // After we delete the node we want, we also have to delete the min node at the bottom of the right side
        }

        return root; // We need return root statement at the bottom so we can send the finished result back to the previous recursive call stack until we reach the root node
    }
}
