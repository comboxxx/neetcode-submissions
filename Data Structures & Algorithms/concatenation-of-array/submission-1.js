class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const n = nums.length;
        const arr = new Array(n * 2);

        for (let i = 0; i < nums.length; i++) {
            arr[i] = nums[i];
            arr[i + n] = nums[i];
        }

        return arr
    }
}
