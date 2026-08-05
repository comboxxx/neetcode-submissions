class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        # To solve this problem, I will implement dept fisrt seach (Decision tree) with backtracking approach
        # The solution is to dive into the path that keep adding the same number to the temporary stack and keep checking
        # if the remaining sum value is equal to 0, I check for the 0 because each callstack traversal, I will decrease the target with current nums[i]
        # if the sum of the group of duplicate number is not equal to the target, I will pop out the last element from the stack, but if yes
        # I will append the current stack to the result array
        # next, for the path that we decide to stop adding the duplicate number onto the stack array
        # I will increase the index by 1 to include the next number for next call stack comparison
        # and the next number will be adding to the stack multiple times or until the remaining sum is equal or great than 0
        # so by doing this, we can get all possible combinations

        res = []

        def dfs(i, remain_sum, stack):
            if remain_sum == 0:
                res.append(stack.copy())
                return

            if remain_sum < 0 or i >= len(nums):
                return

            stack.append(nums[i])
            dfs(i, remain_sum - nums[i], stack)  # This path will keep adding duplicate numbers

            stack.pop()
            dfs(i + 1, remain_sum, stack)
            # i+1 is to add the next number in to the next combinations, remain_sum will not be decreased because this callstack we just switch to put the next number for the next callstack comparison
            
        dfs(0, target, [])
        return res

        # The Time complexity is O(k*2^t/m) for the worst case, k is the time taken for stack copying process, proportional to the average stack size
        # t is represented to target and m is represented to minimum number of the nums array
        # The example of worst case is when the target is high but the minimum number of nums is small like
        # target = 100 and min number is 2 so it will create 50 callstack which take a lot if times

        # The Space complexity is O(t/m) t is target and m is min number, the worst case is the same with time, the computer need to hold large callstack size

