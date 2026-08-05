class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        num_bucket = [[] for _ in range(len(nums) + 1)]

        freq_count = collections.defaultdict(int)

        for n in nums:
            freq_count[n] += 1

        for n, freq in freq_count.items():
            num_bucket[freq].append(n)

        res = []

        for i in range(len(num_bucket) - 1, -1, -1):
            for n in num_bucket[i]:
                res.append(n)
                if len(res) == k:
                    return res

        # The Time complexity is O(n) even we have a nested loop, we only traverse through each bucket at most once and take k times to append the top k frequency number to the result array
        # The Space complexity is O(n) due to the size of bucket array
