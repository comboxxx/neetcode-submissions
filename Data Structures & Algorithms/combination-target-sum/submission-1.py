class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = []

        def dfs(i, remain_sum, stack):
            if remain_sum == 0:
                res.append(stack.copy())
                return
            if remain_sum < 0 or i >= len(nums):
                return

            stack.append(nums[i])
            dfs(i, remain_sum - nums[i], stack)
            stack.pop()
            dfs(i + 1, remain_sum, stack)

        dfs(0, target, [])
        return res
