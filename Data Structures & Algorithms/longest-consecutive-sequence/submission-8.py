class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        longest = 0
        set_num = set(nums)

        for n in nums:
            if n - 1 not in set_num:
                count = 1
                while n + count in set_num:
                    count += 1
                longest = max(longest, count)

        return longest
