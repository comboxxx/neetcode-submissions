class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])

        island_count = 0
        # visit = set()

        def dfs(r, c):

            if min(r, c) < 0 or r == ROWS or c == COLS or grid[r][c] != "1":
                return

            # visit.add((r, c))
            grid[r][c] = "0"
            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)

        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == "1":
                    island_count += 1
                    dfs(r, c)

        return island_count


        # Time: O(n*m) Even though we have nested loops but we only excute the cell those we have never visited
        # Space: O(m*n) due to the dept of call stack, but we already optimized this approach by update grid data in-place, so by doing this, we don't need extra auxiliary structures