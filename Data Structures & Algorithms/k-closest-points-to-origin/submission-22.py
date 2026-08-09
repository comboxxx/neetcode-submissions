class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:

        min_heap = [((x**2 + y**2), [x, y]) for x, y in points]
        heapq.heapify(min_heap)
        print(min_heap)

        res = []

        for i in range(k):
            dist, point = heapq.heappop(min_heap)
            res.append(point)

        return res
