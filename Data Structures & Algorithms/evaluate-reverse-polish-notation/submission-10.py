class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        numStack = []
        res = 0

        for t in tokens:
            try:
                res = int(t)
                numStack.append(res)
            except:
                if t == "+":
                    num_b = numStack.pop()
                    num_a = numStack.pop()
                    res = num_a + num_b
                    numStack.append(res)
                elif t == "-":
                    num_b = numStack.pop()
                    num_a = numStack.pop()
                    res = num_a - num_b
                    numStack.append(res)

                elif t == "*":
                    num_b = numStack.pop()
                    num_a = numStack.pop()
                    res = num_a * num_b
                    numStack.append(res)

                elif t == "/":
                    num_b = numStack.pop()
                    num_a = numStack.pop()
                    res = int(num_a / num_b)
                    numStack.append(res)

        return numStack.pop()
