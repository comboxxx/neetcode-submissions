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
