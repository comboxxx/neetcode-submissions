class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        if len(stones) == 1:
            return stones[0]
        self.max_heap = [-x for x in stones]

        heapq.heapify(self.max_heap)

        while len(self.max_heap) > 1:
            a = -heapq.heappop(self.max_heap)
            b = -heapq.heappop(self.max_heap)
            res = a - b
            if res > 0:
                heapq.heappush(self.max_heap, -res)

        if not self.max_heap:
            return 0
        return -self.max_heap[0]
