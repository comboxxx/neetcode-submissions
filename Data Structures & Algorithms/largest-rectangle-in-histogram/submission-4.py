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
                    # i is for right block and stack[-1] is for the left block and we also need to - 1 so we can get the value in the middle
                else:
                    width = i  # There is no more element left in the stack so this will count the width from the first bar to current bar number

                largest = max(largest, width * height)
            stack.append(i)

            # As you can see, for the current loops, while loop will only get trigger when there is a bar that short that the
            # bars in the stack, if the height of the bars in the array keep increasing only, the will loop will never get triggered
            # So we can put the sentinel value at the end of the array by declaring a new heights array like
            # new_heigths = heights + [0], the will prevent the original data from getting mutated

            # But we can do it the clean code way like this

            # If the stack still not empty after the first iteration, we can have another iteration to clear out the remaining element in the stack

        while stack:
            index = stack.pop()  # Pop the index out from the stack
            height = heights[index]

            if stack:
                width = (
                    n - stack[-1] - 1
                )  # We use n as last bar number instead of i that was indicated to current index of the outer loop, here we are just clearing remaining element in the stack
            else:
                width = n
            largest = max(largest, width * height)

        return largest