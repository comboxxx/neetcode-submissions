class ListNode:
    def __init__(self, key: int, value: int) -> None:
        self.key = key
        self.value = value
        self.next: ListNode | None = None
        self.prev: ListNode | None = None
        pass


class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache: dict[int, ListNode] = {}
        self.head = ListNode(0, 0)  # Dummy node
        self.tail = ListNode(0, 0)  # Dummy node
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node: ListNode):
        prev_node = node.prev
        next_node = node.next

        assert prev_node is not None and next_node is not None
        prev_node.next = next_node
        next_node.prev = prev_node

    def _insert(self, node: ListNode):
        prev_node = self.tail.prev
        self.tail.prev = node
        assert prev_node is not None
        prev_node.next = node
        node.prev = prev_node
        node.next = self.tail

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1

        node = self.cache[key]

        # 1. Remove current node out from the cache list because this node is being read and it should be moved to the last position of the line
        self._remove(node)

        # 2. Inset the current node back to the last positon of the line
        self._insert(node)
        return node.value

    def put(self, key: int, value: int) -> None:
        # Before putting new data, we need to check whether the data has already exist, if it does exist, we need to remove it first and put the data at the last position of the line because update operation share the same priority with read and add
        if key in self.cache:
            self._remove(self.cache[key])

        new_node = ListNode(key, value)
        self.cache[key] = new_node
        self._insert(new_node)

        if len(self.cache) > self.capacity:
            lru_cache = self.head.next
            assert lru_cache is not None
            self._remove(lru_cache)
            del self.cache[lru_cache.key]
