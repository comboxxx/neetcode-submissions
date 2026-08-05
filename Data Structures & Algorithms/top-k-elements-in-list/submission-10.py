class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        buckets = [[] for _ in range(len(nums) + 1)]

        freq_count = collections.defaultdict(int)

        for n in nums:
            freq_count[n] += 1

        for val, freq in freq_count.items():
            buckets[freq].append(val)

        print(buckets)
        res = []

        for i in range(len(buckets) - 1, -1, -1):
            for n in buckets[i]:
                res.append(n)
                if len(res) == k:
                    return res
