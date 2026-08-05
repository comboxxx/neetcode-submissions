# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        queue = []
        res = []

        if root:
            queue.append(root)

        while len(queue) > 0:
            level_length = len(queue)

            for i in range(level_length):
                curr = queue.pop(0)

                if i == level_length - 1:
                    res.append(curr.val)

                if curr.left:
                    queue.append(curr.left)
                if curr.right:
                    queue.append(curr.right)
        return res
