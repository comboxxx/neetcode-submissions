class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let prevMaps = {}

        for (let i = 0; i < nums.length; i++) {
            var diff = target - nums[i]

            if (diff in prevMaps) {
                return [prevMaps[diff], i]
            }

            prevMaps[nums[i]] = i
        }

    }
}
