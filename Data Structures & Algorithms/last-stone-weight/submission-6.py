class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        # To solve this problem, I will implement a max heap
        # 1. I will convert all stones weigths to a negative numbers
        # This will take n time
        max_heap = [-x for x in stones]

        # 2. I will convert the array to heap
        # This will take n time
        heapq.heapify(max_heap)

        # 3. I will write a while loop to compare 2 stones at a time and also destroy them
        #  This will take n-1 time
        while len(max_heap) > 1:
            # 4. I will pop the 2 stones out from the heap to compare them
            stone_a = -heapq.heappop(max_heap)  # This will take log n time
            stone_b = -heapq.heappop(max_heap)

            # 5. I will compare both stones weigth, and collect the remaing weigth then push it back to the heap
            res = stone_a - stone_b
            if res > 0:
                heapq.heappush(max_heap, -res)  # This will take log n time

        if not max_heap:
            return 0
        return -max_heap[0]
