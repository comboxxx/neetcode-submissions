# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        # To solve problem, I will implement DFS traversal with backtracking approach
        # 1. I will create a helper function to do a recursion logics
        # 2. Inside the hlper function, it will include a paremeter for receiving root node and total_sum
        # 3. First thing todo inside the helper function, I will declare a basecase to determine when we reach the null node and it should return False because the leaf node's total_sum didn't match targetSum
        # 4. I will declare a second basecase when we reach the leaf node, so we will also have to check if the total_sum is equal to targetSum, if yes, we will return True
        # 5. I will write an if statement for traversing bot left and right branch, so if we find that total_sum of any leaf node between left and right branch, so we will return True in this statement
        # 6. Last action in the helper function is to return False incase that we never find the leaf node that has total_sum equal to targetSum
        # 7. I will return the result at the end of hasPathSum function

        def dfs(node, total_sum):
            if not node:
                return False
            total_sum += node.val

            if not node.left and not node.right:
                return total_sum == targetSum

            if dfs(node.left, total_sum) or dfs(node.right, total_sum):
                return True

            return False

        return dfs(root, 0)
