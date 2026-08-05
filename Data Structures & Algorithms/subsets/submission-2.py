class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        # To solve this problem, I will implement DFS with dicision making tree approach
        # 1. I will declare a result array for collecting each unique subsets
        # 2. I will declare subset array for collecting each node value while traversing each branch
        # 3. I will create a helper function for doing recursive traversal which will include one parameter
        # this parameter will be an index so we can use it to determine each depth level
        # 4. Inside the helper function, because the actions of this function is for doing recursive calls
        # 5. I will declare a basecase to define the leaf node, so the condition is if i is equal to the length of nums, its mean we have found the leaf node
        # 6. so the action is to append the current subset array to the result array, but I will use .copy() to prevent result array from getting mutated
        # then I will return because it's a leaf node and we have done collecting the subset, so we will jump back to its parent node
        # 7. The next action is to append current number onto the subset array because every times we traverse through each node
        # we will collect every number of the current node, and collecting numbers is for the first path
        # 8. I will call the helper function to do create a recuresive call stacks as the first path, so this path we will collect every node's value
        # 9. I will call the helper function again to make another to make another path, but before calling each node of this path, we will pop the last element
        # out from the subset array, so we can call this path a non-collectin number path
        # last thing, I will return a result array

        res = []
        subset = []

        def dfs(i):
            if i >= len(nums):
                res.append(subset.copy())
                return
            # First path, collect every numbers
            subset.append(nums[i])
            dfs(i + 1)

            # Second path, we won't collect any number
            subset.pop()
            dfs(i + 1)
            pass

        dfs(0)
        return res

        # The Time complexity is O(n*2^n) because there total 2^n subsets (leaf node) generated, and for each subset, it takes O(n) times to copy the element into the result array.
        # The Space complexity is O(n) due to the size of subset array and the maximum depth of the recursive call stacks.
