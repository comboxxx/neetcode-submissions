class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])

        largest = 0

        def dfs(r, c):
            if min(r, c) < 0 or r == ROWS or c == COLS or grid[r][c] != 1:
                return 0

            grid[r][c] = 0
            return dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1) + 1

        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 1:
                    largest = max(largest, dfs(r, c))
        return largest

        # Time: O(m*n) Even though we have a nested loops but our logic will traverse to each land only once because we we sink down each land by assign it's value to 0 before we traverse to the next cell.
        # Space: O(m*n) due to the dept of call stack, we already optimize this approach by updating data in-place, we don't use extra auxiliary structures.
