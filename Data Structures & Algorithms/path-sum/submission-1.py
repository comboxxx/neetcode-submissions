# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        def helper(root, current_sum):
            if not root:
                return False
            current_sum += root.val

            if not root.left and not root.right and current_sum == targetSum:
                return True

            if helper(root.left, current_sum) or helper(root.right, current_sum):
                return True

            return False

        return helper(root, 0)
