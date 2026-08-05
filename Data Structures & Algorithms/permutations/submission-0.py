class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []

        def dfs(i, set_num, stack):
            if len(stack) == len(nums):
                res.append(stack.copy())
                return
            for j in range(len(nums)):
                if nums[j] not in set_num:
                    set_num.add(nums[j])
                    stack.append(nums[j])
                    dfs(j + 1, set_num, stack)
                    set_num.remove(nums[j])
                    stack.pop()

        dfs(0, set(), [])

        return res
