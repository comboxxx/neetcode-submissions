class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        candidates.sort()

        def dfs(start, remain_sum, stack):
            if remain_sum == 0:
                res.append(stack.copy())
                return
            if remain_sum < 0:
                return
            for j in range(start, len(candidates)):
                if j > start and candidates[j] == candidates[j - 1]:
                    continue

               

                stack.append(candidates[j])
                dfs(j + 1, remain_sum - candidates[j], stack)
                stack.pop()

        dfs(0, target, [])
        return res
