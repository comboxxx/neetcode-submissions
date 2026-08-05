class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 != 0:
            return False

        closeToOpen = {"}": "{", ")": "(", "]": "["}
        stack = []
        for char in s:
            # print(closeToOpen["}"])
            if char not in closeToOpen:
                stack.append(char)
                continue
            elif len(stack) > 0 and char in closeToOpen and stack[-1] == closeToOpen[char]:
                stack.pop()
            else:
                return False

        return len(stack) == 0
