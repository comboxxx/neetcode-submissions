class TreeNode:
    def __init__(self, val, key, left=None, right=None) -> None:
        self.val = val
        self.key = key
        self.left = left
        self.right = right
        pass


class TreeMap:
    def __init__(self):
        self.root = None

    def insert(self, key: int, val: int) -> None:
        new_node = TreeNode(val, key)

        if self.root == None:
            self.root = new_node
            return

        curr = self.root
        while curr:
            if key < curr.key:
                if curr.left:
                    curr = curr.left
                else:
                    curr.left = new_node
                    return
            elif key > curr.key:
                if curr.right:
                    curr = curr.right
                else:
                    curr.right = new_node
                    return
            else:
                curr.val = val
                return

    def get(self, key: int) -> int:
        curr = self.root
        while curr:
            if key < curr.key:
                curr = curr.left
            elif key > curr.key:
                curr = curr.right
            else:
                return curr.val

        return -1

    def getMinNode(self, root) -> TreeNode:
        curr = root

        while curr and curr.left:
            curr = curr.left
        return curr

    def getMin(self) -> int:
        if self.root is None:
            return -1

        node = self.getMinNode(self.root)

        return node.val

    def getMax(self) -> int:
        if self.root is None:
            return -1

        curr = self.root

        while curr and curr.right:
            curr = curr.right

        return curr.val

    def remove(self, key: int) -> None:

        def helper(root, key):
            if root is None:
                return

            if key < root.key:
                root.left = helper(root.left, key)
            elif key > root.key:
                root.right = helper(root.right, key)
            else:
                if root.left and root.right:
                    min_node = self.getMinNode(root.right)
                    root.val = min_node.val
                    root.key = min_node.key
                    root.right = helper(root.right, min_node.key)
                elif root.left is None:
                    return root.right
                elif root.right is None:
                    return root.left

            return root

        self.root = helper(self.root, key)

    def getInorderKeys(self) -> List[int]:
        res = []
        stack = []

        curr = self.root
        while curr or stack:
            while curr:
                stack.append(curr)
                curr = curr.left
            curr = stack.pop()
            res.append(curr.key)

            curr = curr.right
        return res

    # def getInorderKeys(self) -> List[int]:
    #     res = []

    #     def helper(root):
    #         if root is None:
    #             return
    #         helper(root.left)
    #         res.append(root.key)
    #         helper(root.right)

    #     helper(self.root)
    #     return res
