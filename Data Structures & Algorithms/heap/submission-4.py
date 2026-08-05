class MinHeap:
    def __init__(self):
        # First, I'm going to initialize the heap with a dummy value at index 0, This allows us to use 1-based indexing
        # which makes parent-child index calculation much easier
        self.heap = [0]

    def push(self, val: int) -> None:
        self.heap.append(val)
        i = len(self.heap) - 1

        while i > 1 and self.heap[i] < self.heap[i // 2]:
            self.heap[i // 2], self.heap[i] = self.heap[i], self.heap[i // 2]
            i = i // 2

    def pop(self) -> int:
        if len(self.heap) == 1:
            return -1
        if len(self.heap) == 2:
            return self.heap.pop()

        res = self.heap[1]
        self.heap[1] = self.heap.pop()
        i = 1

        while i * 2 < len(self.heap):
            if (
                i * 2 + 1 < len(self.heap)
                and self.heap[i * 2 + 1] < self.heap[i * 2]
                and self.heap[i] > self.heap[i * 2 + 1]
            ):
                self.heap[i * 2 + 1], self.heap[i] = self.heap[i], self.heap[i * 2 + 1]
                i = i * 2 + 1
            elif self.heap[i] > self.heap[i * 2]:
                self.heap[i * 2], self.heap[i] = self.heap[i], self.heap[i * 2]
                i = i * 2
            else:
                break

        return res

    def top(self):
        if len(self.heap) > 1:
            return self.heap[1]

        return -1

    def heapify(self, arr):
        if not arr:
            return
        arr.append(arr[0])
        curr = (len(arr) - 1) // 2

        while curr > 0:
            i = curr
            while i * 2 < len(arr):
                if i * 2 + 1 < len(arr) and arr[i * 2 + 1] < arr[i * 2] and arr[i] > arr[i * 2 + 1]:
                    arr[i * 2 + 1], arr[i] = arr[i], arr[i * 2 + 1]
                    i = i * 2 + 1
                elif arr[i] > arr[i * 2]:
                    arr[i * 2], arr[i] = arr[i], arr[i * 2]
                    i = i * 2
                else:
                    break
            curr -= 1
        self.heap = arr
