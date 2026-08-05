class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const count = new Array(3).fill(0);

        for (const n of nums) {
            count[n]++;
        }

        console.log(count);
        let i = 0;

        for (let k = 0; k < count.length; k++) {
            for (let j = 0; j < count[k]; j++) {
                nums[i] = k;
                i++;
            }
        }
    }
}
