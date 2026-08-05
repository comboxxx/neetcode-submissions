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
            self.map.pop(val, None)

    def popLeft(self):
        assert self.left.next is not None
        res = self.left.next.val
        self.pop(res)
        return res


class LFUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.lfuCount = 0
        self.valMap = {}
        self.countMap = collections.defaultdict(int)
        self.listMap = collections.defaultdict(LinkedList)
        pass

    def counter(self, key):
        cnt = self.countMap[key]
        self.countMap[key] += 1
        self.listMap[cnt].pop(key)
        self.listMap[cnt + 1].pushRight(key)

        if cnt == self.lfuCount and self.listMap[cnt].length() == 0:
            self.lfuCount += 1

        pass

    def get(self, key: int) -> int:
        if key not in self.valMap:
            return -1

        self.counter(key)

        return self.valMap[key]

    def put(self, key: int, value: int) -> None:
        if self.cap == 0:
            return

        if key not in self.valMap and self.cap == len(self.valMap):
            res = self.listMap[self.lfuCount].popLeft()
            self.valMap.pop(res, None)
            self.countMap.pop(res, None)

        self.valMap[key] = value
        self.counter(key)
        self.lfuCount = min(self.lfuCount, self.countMap[key])


# Your LFUCache object will be instantiated and called as such:
# obj = LFUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
