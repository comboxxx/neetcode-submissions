class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        # [6,5,2,4]
        # [2,4,5,6]
        # target = 4
        nums.sort()
        res = []

        def dfs(i, total_sum, comb):
            if total_sum == target:
                res.append(comb.copy())
                return

            if i >= len(nums) or total_sum > target:
                return

            comb.append(nums[i])
            dfs(i, total_sum + nums[i], comb)
            comb.pop()
            dfs(i + 1, total_sum, comb)

        dfs(0, 0, [])
        return res

        # The Time complexity is O(n * 2^target/min_number), n is represents to the input size, each time we find that current combination sum is equal to target
        # We need to use average n times for copying process, and for 2^target/min_num, for example, the target is 100
        # and the min number in the input array is 2, this will take times to create 50 callstack depth

        # The Space complexity is O(target/min_number) same reason with the time, the computer need to hold large callstack depths
