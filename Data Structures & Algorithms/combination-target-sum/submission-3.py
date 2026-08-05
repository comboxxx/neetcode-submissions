class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = []
        # i = 1
        # target = 9
        # remain_sum = -2
        # stack = [2,2,2,5]

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

        # Dry run
        # Input: nums = [2,5,6,9]
        # target = 9

        # The Time complexity is O(k*2^target/min_num), k represented to time taken for stack copying process
        # min_num is the minimum number from the nums array, the worst case example is when the target is 100
        # but the min_num is 2 so the computer will have to create 50 callstacks
        # The Space complexity is O(target/min_num) same reason with Time
