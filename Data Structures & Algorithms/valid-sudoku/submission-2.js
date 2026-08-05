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
                // if the current value is dot which indicated to empty box
                // I will skip the current loop
                if (value === ".") continue;

                // Now, I will declare a variables to store, row, column and box keys
                const rowKey = `row ${r} val ${value}`;
                const colKey = `col ${c} val ${value}`;
                // For the box key, I will find the box index by using row and column index and devide them by 3
                // because the small box is only 3x3 size
                const boxKey = `box ${Math.floor(r / 3)}-${Math.floor(c / 3)} val ${value}`;

                // Next, I will check for the duplicates, if we finds the duplicate, it means this is not a valid Sudoku
                if (allSet.has(rowKey) || allSet.has(colKey) || allSet.has(boxKey)) return false;

                // Otherwise, I will add each key to the set
                allSet.add(rowKey);
                allSet.add(colKey);
                allSet.add(boxKey);
            }
        }

        // Finally, If the loop finish without any duplicates, it's a valid Sudoku
        return true;
    }
}
