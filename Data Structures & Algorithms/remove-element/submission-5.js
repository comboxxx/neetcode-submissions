class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // To solve this problem, I will use a two pointers approach (linear scan)

        // I will declare k value which act as a pointer to the next available position for elements not equal to val
        let k = 0;

        // Next, I will iterate though each number
        for (let i = 0; i < nums.length; i++) {
            // If the current number is not equal to val
            // I will update the number at k index
            if (nums[i] !== val) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k;

        // So the Time complexity is O(n) because we travese the array once
        // The Space complexity is O(1) because we only declared a constant values
    }
}
