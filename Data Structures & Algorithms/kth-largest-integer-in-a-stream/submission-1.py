class KthLargest:
    # To solve this problem, I will use a Min heap approach.
    # In the constructor, I will will store nums to the member variable then heapify it, this will take O(n) time.
    # I will store k to the member variable, so we can use it in other function in the class
    # last in the constructor, I will write a while loop to pop out the minimun values while lenght on min heap until length of min heap is not greater than k
    # For the Add function, I will push the new value to the heap first, then I will write the while loop to pop the min values until
    # length of min heap is not greater than k
    #  I will return min heap[0] at the end of function because we always pop elements out until the length of heap is equal to KthLargest
    # so min_heap[0] should be the smallest value and should be the KThLargest element.
    def __init__(self, k: int, nums: List[int]):
        self.min_heap, self.k = nums, k
        heapq.heapify(self.min_heap)
        while len(self.min_heap) > k:
            heapq.heappop(self.min_heap)

    def add(self, val: int) -> int:
        if self.min_heap and val <= self.min_heap[0]:
            return self.min_heap[0]
        heapq.heappush(self.min_heap, val)
        while len(self.min_heap) > self.k:
            heapq.heappop(self.min_heap)
        return self.min_heap[0]

    # The Time complexity for heapify is O(n)
    # The Time complexity for popping process is O(n-k * log n) for both while loops in constructor and add function
    # The Time complexity for adding new element is O(log n)
    # The Space complexity for this solution is O(k)
