class Solution:
    def kClosest(
        self, points: List[List[int]], k: int, s: int = 0, e: Optional[int] = None
    ) -> List[List[int]]:
        if e is None:
            e = len(points) - 1

        pivot = points[e]
        left = s

        if left >= e:
            return points[:k]

        for i in range(s, e):
            dist_i = points[i][0] ** 2 + points[i][1] ** 2
            dist_pivot = pivot[0] ** 2 + pivot[1] ** 2
            if dist_i < dist_pivot:
                points[left], points[i] = points[i], points[left]
                left += 1

        points[e] = points[left]
        points[left] = pivot

        if left is k:
            return points[:k]
        elif left < k:
            return self.kClosest(points, k, left + 1, e)
        else:
            return self.kClosest(points, k, s, left - 1)
