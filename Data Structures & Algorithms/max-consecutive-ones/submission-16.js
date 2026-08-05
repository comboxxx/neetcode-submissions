class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let longest = 0;
        let currentLength = 0;

        for (const n of nums) {
            if (n !== 1) {
                currentLength = 0;
                continue;
            }

            currentLength++;
            longest = Math.max(currentLength, longest);
        }

        return longest;
    }
}
