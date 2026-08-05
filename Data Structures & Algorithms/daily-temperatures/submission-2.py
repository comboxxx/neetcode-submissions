class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = []
        res = [0] * len(temperatures)

        for i, t in enumerate(temperatures):
            while stack and t > temperatures[stack[-1]]:
                prev_index = stack.pop()
                res[prev_index] = i - prev_index
            stack.append(i)

        return res

    # The Time complexity of this solution is O(n) because each day is pushed onto the stack once and popped at most once
    # and space complexity it also O(n) due to the size of the result array and the stack
