class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // for (let r = 0; r < matrix.length; r++) {
        let left = 0;
        // let currentRow = matrix[r];
        let right = matrix.length * matrix[0].length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const currentRow = Math.floor(mid / matrix[0].length);
            const currentColumn = mid % matrix[0].length;

            if (target < matrix[currentRow][currentColumn]) {
                right = mid - 1;
            } else if (target > matrix[currentRow][currentColumn]) {
                left = mid + 1;
            } else return true;
        }
        // }

        return false;
    }
}
