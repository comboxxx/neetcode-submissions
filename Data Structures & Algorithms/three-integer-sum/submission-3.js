class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // const count = {};

        // for (const n of nums) {
        //     count[n] = (count[n] || 0) + 1;
        // }
        nums.sort((a, b) => a - b);
        let res = [];

        for (let i = 0; i < nums.length; i++) {
            let left = i + 1;
            let right = nums.length - 1;

            if (i > 0 && nums[i] === nums[i - 1]) continue;

            while (left < right) {
                if (nums[i] + nums[left] + nums[right] > 0) {
                    right--;
                } else if (nums[i] + nums[left] + nums[right] < 0) {
                    left++;
                } else {
                    res.push([nums[i], nums[left], nums[right]]);

                    while (nums[left] === nums[left + 1]) {
                        left++;
                    }

                    while (nums[right] === nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;

                    // if (nums[left] === nums[left - 1]) left++;
                    // if (nums[right] === nums[right - 1]) right--;
                }
            }
        }
        return res;
    }
}
