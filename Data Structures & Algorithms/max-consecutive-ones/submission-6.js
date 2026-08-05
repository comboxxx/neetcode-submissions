class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let longest = 0;
        let length = 0;
        for (const n of nums) {
            if (n !== 1) {
                length = 0;
                continue;
            }

            length++;
            longest = Math.max(longest, length);
        }

        return longest;
    }
}
