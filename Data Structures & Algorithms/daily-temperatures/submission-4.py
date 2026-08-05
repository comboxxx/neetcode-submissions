class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = []  # [5,6]
        res = [0] * len(temperatures)  # [1,4,1,2,1,0,0]

        for i, t in enumerate(temperatures):
            # i = 6, t = 28
            # stackLenght = 0
            while stack and t > temperatures[stack[-1]]:  # temperatures[5] = 40
                prev_index = stack.pop()  # prev_index = 1
                res[prev_index] = i - prev_index  # i = 5, 5 - 1 = 4
            stack.append(i)

        return res

    # The Time complexity of this solution is O(n) because each day is pushed onto stack once and popped at most once
    # The Space complexity is also O(n) due to the size of ther result array and the stack

    # Dry run
    # [30,38,30,36,35,40,28]
