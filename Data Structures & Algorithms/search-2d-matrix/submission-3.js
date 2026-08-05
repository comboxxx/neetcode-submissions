class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // To solve this problem, I will use a Binary search approach
        // 1. I will declare left and right pointers - left should be placed at the first index and right should be placed at the last index of combined all row together
        // 2. I will iterate until left is greater than right
        // 3. Inside the loop, I will write a logic to find the middle index
        // 4. Since we have a 2D Matrix array, so while we comparing target with the current middle pointer's value
        // we have to find the index of row and column first
        // 5. I will compare target with the data of middle pointer - if target is less than the data of middle, we will stop searching at the right side by moving right pointer to the left of middle pointer
        // if target is great than middle pointer, we will stop searching at the left side and move left pointer to the right of middle pointer
        // 6. If target is equal to middle, I will return true
        // 7. If the loop end without finding the expected value - I will return false

        let left = 0;
        const columnLength = matrix[0].length;
        let right = matrix.length * columnLength - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            // Because we have multiple row data so we will try to flatten the array (Make is look like 1D array)
            // We have to get the covert the middle index to row and column indices
            const row = Math.floor(mid / columnLength);
            const col = mid % columnLength;

            // Let's write the condition for the comparison

            if (target < matrix[row][col]) {
                right = mid - 1;
            } else if (target > matrix[row][col]) {
                left = mid + 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
