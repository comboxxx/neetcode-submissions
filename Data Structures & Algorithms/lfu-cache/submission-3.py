class ListNode:
    def __init__(self, val, prev=None, next=None) -> None:
        self.val = val
        self.prev = prev
        self.next = next
        pass


class LinkedList:
    def __init__(self) -> None:
        self.left = ListNode(0)
        self.right = ListNode(0, self.left)
        self.left.next = self.right
        self.map = {}
        pass

    def length(self):
        return len(self.map)

    def pushRight(self, val):
        node = ListNode(val, self.right.prev, self.right)
        self.map[val] = node
        assert self.right.prev is not None
        self.right.prev.next = node
        self.right.prev = node

    def pop(self, val):
        if val in self.map:
            node = self.map[val]
            prev_node, next_node = node.prev, node.next
            prev_node.next = next_node
            next_node.prev = prev_node
            del self.map[val]

    def popLeft(self):
        assert self.left.next is not None
        res = self.left.next.val
        self.pop(res)
        return res

    def update(self, val):
        self.pop(val)
        self.pushRight(val)
        pass


class LFUCache:
    def __init__(self, capacity: int):
        self.cap = capacity  # Store capacity
        self.valMap = {}  # Store values
        self.countMap = collections.defaultdict(int)  # Store count of each key
        self.listMap = collections.defaultdict(LinkedList)  # Store list of each frequency
        self.lfuCount = 0  # Store Least Frequent used number

    def counter(self, key):
        # First, get the current count
        cnt = self.countMap[key]
        # Increase current count
        self.countMap[key] += 1

        # Remove node from current frequency list
        self.listMap[cnt].pop(key)
        # Add node to higher frequency list
        self.listMap[cnt + 1].pushRight(key)

        # If current count is equal to lfuCount and current count list is empty, Increase lfuCount by 1,
        # this ensure that we can evict the correct node from the correct frequency list when the memory is full
        if cnt == self.lfuCount and self.listMap[cnt].length() == 0:
            self.lfuCount += 1
        pass

    def get(self, key: int) -> int:
        # If current key doesn't exist in cache, return -1
        if key not in self.valMap:
            return -1

        # Increase frequency count
        self.counter(key)
        # return value of the key
        return self.valMap[key]

    def put(self, key: int, value: int) -> None:
        if self.cap == 0:
            return

        # But we need to check if the capacity is full, if yes, we need to evict the least frequent node from the lowest count list
        # We can check this when new key dosn't exist in cache, if never exist, its mean we have evict lease frequent used data from cache before add the new one

        if key not in self.valMap and self.cap == len(self.valMap):
            # we have to remove lfu node from the lowest count list
            res = self.listMap[self.lfuCount].popLeft()  # Node at left side will be removed
            # We also need to clear data from valMap and countMap
            self.valMap.pop(res, None)
            self.countMap.pop(res, None)

        # Save key-value pair to the cache
        self.valMap[key] = value
        # Increase count logics
        self.counter(key)
        # Update lfuCount
        self.lfuCount = min(self.lfuCount, self.countMap[key])
        pass


# Your LFUCache object will be instantiated and called as such:
# obj = LFUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
