class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        # To solve this problem, I will implement Depth-first seach with backtracking approach
        # 1. I will create result array for collecting each combinations those has sum value = target
        # 2. I will create a helper function to traversal through each number recerusively
        # 3. Inside the helper function I will create a parameters following, index, totol_sum, stack
        # 4. I will write the base cases, the first base case should detect when total_sum equal to target
        # then we can append the current stack to the result array
        # 5. I will write a base case to prevent index going out of bound from the candidates array length
        # 6. Because we are trying to create the decision tree, so we will traversal through 2 branch
        # the first branch to a pickup branch where we will pick each candidate before going deeper into the next callstack
        # 7. then I will traverse through the none pickup path where, we don't pick the number, but before we traver through each node
        # we need to pop the last element from the stack and write a logic to check if current number is equal to the previous number
        # this will prevent collecting the same combinations
        candidates.sort()
        res = []

        def dfs(i, total_sum, stack):
            if total_sum == target:
                res.append(stack.copy())
                return
            if i == len(candidates) or total_sum > target:
                return

            stack.append(candidates[i])
            dfs(i + 1, total_sum + candidates[i], stack)
            stack.pop()

            while i + 1 < len(candidates) and candidates[i] == candidates[i + 1]:
                i += 1

            dfs(i + 1, total_sum, stack)

        dfs(0, 0, [])
        return res
