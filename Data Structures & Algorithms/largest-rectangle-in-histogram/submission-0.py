class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        # To solve this problem efficiently, I will implement a Monotonic Increasing Stack approach.
        # This will allow us to find the largest rectangle area in O(n) time complexity.
        largest = 0
        stack = []

        # EDGE CASE / INCREASING ORDER: If the bar heights keep increasing, the while loop will never trigger.
        # To handle this, I append a sentinel value [0] at the end of the array to guarantee that 
        # all remaining bars in the stack are forced to be popped and processed before the function finishes.
        # Note: Using 'heights + [0]' creates a new list copy, ensuring we do not mutate the original input data.
        new_heights = heights + [0]

        for i, h in enumerate(new_heights):
            # MONOTONIC LAW: If the stack is not empty and the current bar 'h' is strictly less than 
            # the bar height at the top of the stack, it means the current bar acts as a right boundary 
            # that limits further horizontal expansion for those taller bars.
            # Thus, we enter a while loop to pop and calculate the areas for those blocked bars.
            while stack and h < new_heights[stack[-1]]:
                # Pop the index of the taller bar to calculate its maximal rectangle area.
                index = stack.pop()
                height = new_heights[index]
                
                # DETERMINING THE WIDTH:
                if stack:
                    # Case 1 (Taller Bars): If the stack is not empty, the new top of the stack 'stack[-1]' 
                    # represents the left boundary (the first bar to the left that is shorter than the popped bar).
                    # The valid width is the distance between the right boundary 'i' and the left boundary 'stack[-1]', 
                    # excluding both ends, which is formulated as: i - stack[-1] - 1.
                    width = i - stack[-1] - 1
                else:
                    # Case 2 (Shortest Bar): If the stack becomes empty, it means the popped bar was the shortest 
                    # bar encountered so far. It can freely extend its width all the way back to index 0.
                    # Therefore, the width is simply equal to the current index 'i'.
                    width = i  
                
                # Update the maximum area found so far by comparing the current global maximum with (width * height).
                largest = max(largest, width * height)

            # If the current bar is taller or equal to the top of the stack, 
            # we push its index onto the stack to continue accumulating the width.
            stack.append(i)

        return largest