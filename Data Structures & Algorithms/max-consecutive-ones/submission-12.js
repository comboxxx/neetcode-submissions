class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        // To solve this problem, I will use a linear scan approach

        // I will declare two variables to store the longest consecutive number
        // and the current continuous length number
        let longest = 0;
        let currentCount = 0;

        // I will iterate each number in the array
        for (const n of nums) {
            // If the number is not equal to 1, I will reset the currentCount number to 0 and end the current loop
            if (n !== 1) {
                currentCount = 0;
                continue;
            }

            // Otherwise, I will increase the currentCount by 1 and update the global maximum by using Math.max()
            currentCount++;
            longest = Math.max(longest, currentCount);
        }

        // I will return the longest value
        return longest;

        // This time complexity is O(n) because we iterate through the array once
        // The Space complexity is O(1) because we only declared the constant variables
    }
}
