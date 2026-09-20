class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])

        largest = 0

        def dfs(r, c):
            if min(r, c) < 0 or r == ROWS or c == COLS or grid[r][c] != 1:
                return 0

            grid[r][c] = 0
            count = 0
            count += dfs(r + 1, c)
            count += dfs(r - 1, c)
            count += dfs(r, c + 1)
            count += dfs(r, c - 1)

            return 1 + count

        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 1:
                    count = dfs(r, c)
                    print(count)
                    largest = max(largest, count)

        return largest
