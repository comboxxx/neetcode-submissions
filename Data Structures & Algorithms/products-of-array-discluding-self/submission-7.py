class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = []
        prefix = 1
        for n in nums:
            res.append(prefix)
            prefix = prefix * n
        print(res)

        postfix = 1
        for i in range(len(res) - 1, -1, -1):
            res[i] *= postfix
            postfix *= nums[i]

            # postfix = nums[i] *
            # nums[i] = postfix

        return res
