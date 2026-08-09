class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:

        max_heap = [(-(x**2 + y**2), [x, y]) for x, y in points]
        heapq.heapify(max_heap)
        print(max_heap)

        while len(max_heap) > k:
            heapq.heappop(max_heap)

        res = []

        for i in max_heap:
            dist, point = i
            res.append(point)

        return res
