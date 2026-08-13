class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        max_heap = [-weight for weight in stones]
        heapq.heapify(max_heap)

        while len(max_heap) > 1:
            stone_x = -heapq.heappop(max_heap)
            stone_y = -heapq.heappop(max_heap)
            remain_weight = stone_x - stone_y

            if remain_weight > 0:
                heapq.heappush(max_heap, -remain_weight)
        if len(max_heap) > 0:
            return -max_heap[0]

        return 0
