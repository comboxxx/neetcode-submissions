class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        freq_map = collections.defaultdict(int)

        for n in nums:
            freq_map[n] += 1

        buckets = [[] for _ in range(len(nums) + 1)]

        res = []

        for num, freq in freq_map.items():
            buckets[freq].append(num)
        print(buckets)

        for i in range(len(buckets) - 1, -1, -1):
            for num in buckets[i]:
                res.append(num)
                if len(res) == k:
                    return res

        return res
