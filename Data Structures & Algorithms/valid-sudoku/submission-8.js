class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // To solve this problem, I will use set to store each number of row, col and box
        const allSet = new Set();

        // I will iterate though each row and column
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];
                //If the current value is not a number, I will skip current loop
                if (val === ".") continue;
                // I will declare a constand variable to store the keys
                const rowKey = `row ${r} val ${val}`;
                const colKey = `col ${c} val ${val}`;
                const boxKey = `box ${Math.floor(r / 3)}-${Math.floor(c / 3)} val ${val}`;

                // I will check if any key already exist in the set, so if it already exist
                // so it's not a valid Sudoku
                if (allSet.has(rowKey) || allSet.has(colKey) || allSet.has(boxKey)) return false;

                // Otherwise, I will add these key to the set at the end of the current loop
                allSet.add(rowKey);
                allSet.add(colKey);
                allSet.add(boxKey);
            }
        }

        //If the loop finish without finding any duplicate numbers, so it's a valid Soduku
        return true;
    }
}
