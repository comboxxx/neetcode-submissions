class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // To solve this problem, I will use Hash Map to store the value for the comparison
        const maps = {}

        // I will loop through each number in the array
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]

            // I will calculate the different
            const diff = target - num

            // If the different number is already stored in the map, I will return the result
            if (diff in maps) return [maps[diff], i]
        // Otherwise, I will add the current number to the map with the current index value

            maps[num] = i

        }



    }
}
