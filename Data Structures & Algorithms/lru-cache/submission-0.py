class ListNode:
    def __init__(
        self,
        key: int,
        value: int,
    ) -> None:
        self.key = key
        self.value = value
        self.next: ListNode | None = None
        self.prev: ListNode | None = None

        pass


class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache: dict[int, ListNode] = {}
        self.head: ListNode = ListNode(0, 0)  # Dummy
        self.tail: ListNode = ListNode(0, 0)  # Dummy
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node: ListNode):
        prev_node = node.prev
        next_node = node.next

        assert prev_node is not None and next_node is not None
        prev_node.next = next_node
        next_node.prev = prev_node

    def _insert(self, node: ListNode):
        node.next = self.tail
        prev_node = self.tail.prev
        node.prev = prev_node
        assert prev_node is not None
        prev_node.next = node
        self.tail.prev = node

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1

        node = self.cache[key]  # Got the data

        # Switch the node position to the tail to prevent this node from getting evicted too soon
        self._remove(node)
        self._insert(node)

        return node.value

    def put(self, key: int, value: int) -> None:

        if key in self.cache:
            self._remove(self.cache[key])

        new_node = ListNode(key, value)
        self.cache[key] = new_node
        self._insert(new_node)

        if len(self.cache) > self.capacity:
            lru_node = self.head.next
            assert lru_node is not None
            self._remove(lru_node)
            del self.cache[lru_node.key]
