class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        res = 0
        popCount = 0
        numStack = []

        for t in tokens:
            try:
                res = int(t)
                numStack.append(res)
            except:
                if t == "+":
                    num_a = numStack.pop()
                    num_b = numStack.pop()
                    res = num_a + num_b
                    numStack.append(res)
                if t == "-":
                    num_b = numStack.pop()
                    num_a = numStack.pop()
                    res = num_a - num_b
                    numStack.append(res)
                if t == "*":
                    num_a = numStack.pop()
                    num_b = numStack.pop()
                    res = num_a * num_b
                    numStack.append(res)
                if t == "/":
                    num_b = numStack.pop()
                    num_a = numStack.pop()
                    res = int(num_a / num_b)
                    numStack.append(res)

        return res
