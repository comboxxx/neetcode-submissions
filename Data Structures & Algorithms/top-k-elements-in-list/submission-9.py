class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq_map = collections.defaultdict(int)
        for n in nums:
            freq_map[n] += 1

        buckets = [[] for _ in range(len(nums) + 1)]

        for (
            num,
            freq,
        ) in freq_map.items():  # .items will prove data format like (key,value), (num,freq)
            buckets[freq].append(num)

        # We have done added each number into each freq bucket

        # lets filter out k numbers then add to the result array

        res = []

        # I will iterate the bucket array backward
        for i in range(len(buckets) - 1, -1, -1):
            for number in buckets[i]:
                res.append(number)
                if len(res) == k:
                    return res

        return res

        # The Time complexity is O(n) because we only do iterations for collection each number frequency O(n), 
        # we created an array of the empty buckets O(n)
        # we appended each number into the frequent bucket O(n)
        # The last one, we append the most frequent numbers into the result array O(n), even we have a nested loop, it's still iterate only n times

        # The Space complexity is O(n) due to the size of the Map and the Buckets and the result array
