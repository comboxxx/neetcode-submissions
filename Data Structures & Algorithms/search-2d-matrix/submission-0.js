class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let r = 0; r < matrix.length; r++) {
            let left = 0;
            let currentRow = matrix[r];
            let right = currentRow.length - 1;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);

                if (target < currentRow[mid]) {
                    right = mid - 1;
                } else if (target > currentRow[mid]) {
                    left = mid + 1;
                } else return true;
            }
        }

        return false;
    }
}
