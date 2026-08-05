# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        def dfs(node, total_sum):
            if not node:
                return False
            total_sum += node.val

            if not node.left and not node.right and total_sum == targetSum:
                return True

            if dfs(node.left, total_sum) or dfs(node.right, total_sum):
                return True

            return False

        return dfs(root, 0)
