class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = []

        def dfs(i, target, stack):
            if target == 0:
                res.append(stack.copy())
                return
            if target < 0 or i >= len(nums):
                return
            stack.append(nums[i])

            dfs(i, target - nums[i], stack)
            stack.pop()
            dfs(i + 1, target, stack)
            pass

        dfs(0, target, [])
        return res
