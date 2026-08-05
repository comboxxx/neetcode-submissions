class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // To solve this problem, I will use a Set to store all the keys
        const allSet = new Set();

        // Next, I will iterate through each rows and columns
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const value = board[r][c];

                // Before we proceed further, I will check for an early return
                // if the value is dot which indicates an empty box
                // I will skip the current loop
                if (value === ".") continue;

                // Now, I will declare a variables to store, row, column and box keys
                const rowKey = `row ${r} val ${value}`;
                const colKey = `col ${c} val ${value}`;
                // I will find the box index by using row and column indices and divide them by 3
                // because each box size is 3x3
                const boxKey = `box ${Math.floor(r / 3)}-${Math.floor(c / 3)} val ${value}`;

                // Next, I will check for a duplicate, if we find a duplicate, it means, this is not a valid Sudoky
                if (allSet.has(rowKey) || allSet.has(colKey) || allSet.has(boxKey)) return false;

                // Otherwise, I will add each key to the set
                allSet.add(rowKey);
                allSet.add(colKey);
                allSet.add(boxKey);
            }
        }

        // Finally, if the loops finish without any duplicates, it means this is a valid Sudoku
        return true;

        // The Time complexity is O(1) because the board size is fixed at 9x9
        // The Space complexity is also O(1) because board size is fixed, but it will be O(n^2) if the board size is scalable
    }
}
