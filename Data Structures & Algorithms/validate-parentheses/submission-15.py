class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 != 0:
            return False

        closeToOpen = {"}": "{", ")": "(", "]": "["}
        stack = []

        for char in s:
            if char not in closeToOpen:
                stack.append(char)
            elif len(stack) > 0 and stack[-1] == closeToOpen[char]:
                stack.pop()
            else:
                return False

        return len(stack) == 0
