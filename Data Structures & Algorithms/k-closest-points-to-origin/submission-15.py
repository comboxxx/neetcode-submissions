import random
class Solution:
    def kClosest(
        self, points: List[List[int]], k: int, s: int = 0, e: Optional[int] = None
    ) -> List[List[int]]:
        if e is None:
            e = len(points) - 1

        if s >= e:
            return points[:k]
        rand_idx = random.randint(s, e)
        pivot = points[rand_idx]
        points[rand_idx], points[e] = points[e], points[rand_idx]
        left = s

        # Time: O(n^2) for skewed line, O(n)
        for i in range(s, e):
            dist_i = points[i][0] ** 2 + points[i][1] ** 2
            dist_pivot = pivot[0] ** 2 + pivot[1] ** 2

            if dist_i < dist_pivot:
                points[left], points[i] = points[i], points[left]
                left += 1

        points[e] = points[left]
        points[left] = pivot

        if left == k:
            return points[:k]
        elif left < k:
            return self.kClosest(points, k, left + 1, e)
        else:
            return self.kClosest(points, k, s, left - 1)

        # Time complexity is O(n) on average, O(n^2) for the worst case if the worst pivot always got picked, so we can only cut off 1 element at a time.
        # Space complexity is O(log n) on average because most of the time we cut element in half, O(n) for the worst case when we can only cut off 1 element at at time, this make it create large call stack depth
