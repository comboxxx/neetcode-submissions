class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = []

        def dfs(i, total_sum, stack):
            if i < len(nums) and total_sum == target:
                res.append(stack.copy())
                return

            if i > len(nums) - 1 or total_sum > target:
                return

            stack.append(nums[i])
            dfs(i, total_sum + nums[i], stack)
            stack.pop()
            dfs(i + 1, total_sum, stack)

        dfs(0, 0, [])
        return res
