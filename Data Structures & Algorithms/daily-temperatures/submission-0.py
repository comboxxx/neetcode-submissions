class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        stack = []

        for index, temp in enumerate(temperatures):
            while len(stack) > 0 and temp > temperatures[stack[-1]]:
                prev_index = stack.pop()
                res[prev_index] = index - prev_index
            stack.append(index)
            

        return res
