class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // To implement the binary search, these are the steps we have to follow
        // 1. Declare left and end pointer - left should start from 0 and end should be placed at the last index of th array
        // 2. We need to iterate until left is greater than right or until we found the index of the value we are searching for
        // 3. Inside the iteration, we will find the middle index between left and right pointer for using in the comparison operation
        // 4. We will do the comparison, if the target is less than the value of the middle pointer, we will move right pointer to mid-1, by doing this, we will not seach it at the right side anymore
        // 5. We will also check if the target is greater than the value of the middle pointer we will move the left pointer to mid+1
        // 6. Otherwise, its mean the target is equal to value of the middle - This is the happy flow
        // 7. We will have a return at the end of the function incase that the loop end without finding the expected result

        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (target < nums[mid]) right = mid - 1;
            else if (target > nums[mid]) left = mid + 1;
            else return mid; // This is the happy flow
        }

        return -1;
    }
}
