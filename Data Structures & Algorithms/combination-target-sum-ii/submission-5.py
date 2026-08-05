class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        # To solve this problem, I will implement a decision tree with backtracking approach
        # 0. I will sort candidates array first because I will do a duplicate number skip logic inside the helper function
        # 1. I will declare result array for collect the combinations those sum to the target
        # 2. I will create a helper function for traverse through each branch recursively
        # 3. I will declare 3 parameters, The first one is the index of current call stack, the second is total sum and the third is stack
        # 4. Inside the helper function I will create a base cases, the first one is for detect when the total sum of current node is equal to target
        # if yes, I will append the current stack into the result array and return to the previous callstack
        # the second base case is for returning to the previous callstack when i (index) reach out of bound of candidates array or total sum is greater than target, its mean this branch sum is not equal to target
        # 5. I will implement the logic for the pickup branch, this branch will collect each candidate and put them into the stack, one candidate per callstack
        # so I will append the candidate onto stack and call heleper function recursively with i+1, total_sum+candidates[i] and stack
        # 6. Once after the pickup branch traversal is done and it successfully return to the parent callstack, I will pop out the last element from stack
        # 7. I will create a while loop, the loop should run while i+1 is less than or equal to the length of candidates to ensure that the duplicate number comparison logic will not break, the logic for comparing duplicate number is candidates[i] == candidates[i+1] (comparing current number with the next number)
        # by doing this, we can skip the duplicate number to ensure that we are not appending the duplicate combination in the next callstack
        # 8. next, I will implement the non-pick branch logic, I will call the helper per function recursively again with i+1, but I will just include total_sum without adding candidates[i] because this branch we are not picking up the number
        # and I will include the stack
        # 9. Last thing, I will return the result array

        # The Time complexity is O(n*2^n) for the worst case, n is represented to the input size
        # The worst case can heppen when there are no duplicate numbers in the input array and target value is high enough, this require the function to create a lot of nodes until if find out that the sum is equal to target on not
        # The Space complexity is O(n) due to the maximum callstack depth and the size of stack which will be O(n+n) but in term of Big O nation we simplify it to O(n)

        res = []
        candidates.sort()

        def dfs(i, total_sum, stack):
            if total_sum == target:
                res.append(stack.copy())
                return
            if i >= len(candidates) or total_sum > target:
                return

            stack.append(candidates[i])
            dfs(i + 1, total_sum + candidates[i], stack)
            stack.pop()

            while i + 1 < len(candidates) and candidates[i] == candidates[i + 1]:
                i += 1

            dfs(i + 1, total_sum, stack)

        dfs(0, 0, [])
        return res
