class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        cars = [[p, (target - p) / s] for p, s in zip(position, speed)]
        cars.sort(reverse=True)

        stack = []

        for p, time in cars:
            stack.append(time)
            if len(stack) > 1 and stack[-1] <= stack[-2]:
                stack.pop()

        return len(stack)

    # The Time complexity of this solution is O(n log n) because we sorted cars array based one postion.
    # The linear scan using stack takes O(n) because each car is pushed onto the stack once and popped at most once.
    # The Space complexity it O(n) due to the size of cars array and the stack

