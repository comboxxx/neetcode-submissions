class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        # To solve this problem, I will implement DFS approach
        # 1. I will declare the original color
        original_color = image[sr][sc]

        # 2. I will make an early return, if the original color is the same color with target color
        if original_color == color:
            return image

        # 3. I will declare a size or row and column
        ROWS, COLS = len(image), len(image[0])

        # 4. I will declare a helper DFS column to fill in the colors recursively
        def dfs(r, c):
            # 5. I will declare a base case to return when current cell can't be filled with the target color
            if min(r, c) < 0 or r == ROWS or c == COLS or image[r][c] != original_color:
                return

            # 6. Fill the new color into the cell
            image[r][c] = color
            # 7. I will call dfs() to traverse to 4 directions for each cell adjacent nodes
            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)

        dfs(sr, sc)
        return image

        # Time: O(4^n*m) becuase we always do a 4 directions traversal
        # Space: O(1) because we didn't have any extra auxiliary variable
