class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let longest = 0;
        let currentCount = 0;

        for (const n of nums) {
            if (n !== 1) {
                currentCount = 0;
                continue;
            }

            currentCount++;
            longest = Math.max(longest, currentCount);
        }
        return longest;
    }
}
