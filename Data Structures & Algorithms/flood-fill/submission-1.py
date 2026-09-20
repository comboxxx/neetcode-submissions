class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        current_color = image[sr][sc]

        if current_color == color:
            return image

        def dfs(r, c):
            ROWS, COLS = len(image), len(image[0])
            if (
                min(r, c) < 0
                or r == ROWS
                or c == COLS
                or image[r][c] != current_color
                or image[r][c] == color
            ):
                return

            image[r][c] = color
            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)

        dfs(sr, sc)
        return image
