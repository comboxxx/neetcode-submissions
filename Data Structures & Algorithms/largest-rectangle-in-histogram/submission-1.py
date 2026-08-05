class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        largest = 0
        stack = []
        n = len(heights)

        for i, h in enumerate(heights):
            while stack and h < heights[stack[-1]]:
                index = stack.pop()
                height = heights[index]

                if stack:
                    width = i - stack[-1] - 1
                else:
                    width = i
                largest = max(largest, width * height)
            stack.append(i)

        while stack:
            index = stack.pop()
            height = heights[index]

            if stack:
                width = n - stack[-1] - 1
            else:
                width = n
            largest = max(largest, width * height)

        return largest
