class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        # To solve this problem, I will implement depth-first seach with backtracking approach
        # 1. I will create a result array for collecting each valid permutations
        # 2. I will create a helper function to traverse throught each permutations recursively
        # 3. The helper function will include 2 parameters, the first parameter is stack, using for collection each number and keep the numbers in the correct other of each path
        # the second parameter will be set_num to store each number, so when we need to check if the current number is already included in the stack, we will use set_num to find out which only take O(1) time
        # 4. I will write a base case for check if the length of the stack is equal to the length of input array, its means we have found a valid permutations
        # then we can append the current stack/permutation to the result array then we can return back to the previous call stack
        # 5. For each node traversal logic, I will use a for loop to switch to the next number so we can visit all possibles permutations
        # 6. inside for loop, I will check if set already included the current number, if yes, I will skip current number, but if not
        # I will keep traversing the the next call stack, but before go to the next call stack, I will append the current number to the stack and add current number to the set
        # 7. I will execute the helper function recursively and include stack and set as an arguments
        # the next call stack will use both variables as the indicator whether to skip the number or collecting number or keep traversing to the next call stack
        # 8. After the current path traversal is done, I will pop out the last element from the stack and also remove the last element from the set so I can backtrack safely
        # 9. I will return the result array at the end of the function

        res = []

        def dfs(stack, set_num):
            if len(stack) == len(nums):
                res.append(stack.copy())
                return

            for i in range(len(nums)):
                if nums[i] not in set_num:
                    stack.append(nums[i])
                    set_num.add(nums[i])
                    dfs(stack, set_num)
                    stack.pop()
                    set_num.remove(nums[i])

        dfs([], set())
        return res

        # The Time complexity is O(n*n!) because there are n! possibles permutations and each valid permutation
        # takes n times for a stack copying process
        # The Space complexity is O(n) due to the maximun call stack depth, but if we count the result array, 
        # I will be O(n*n!) because we will store up to n! data in result array and each data has n size
