class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const allSet = new Set();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const value = board[r][c];
                if (board[r][c] === ".") continue;
                const rowKey = `row ${r} value ${value}`;
                const colKey = `col ${c} value ${value}`;
                const boxKey = `box ${Math.floor(r / 3)}-${Math.floor(c / 3)} value ${value}`;

                if (allSet.has(rowKey) || allSet.has(colKey) || allSet.has(boxKey)) return false;

                allSet.add(rowKey);
                allSet.add(colKey);
                allSet.add(boxKey);
            }
        }

        return true
    }
}
