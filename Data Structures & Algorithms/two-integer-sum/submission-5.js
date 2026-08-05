class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        // To solve this problem, I will use a Has Map to store a number I have already seen and their indices
        const maps = {}

        // Next, I will loop through each number in the array
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            // Inside the array, I will calculate the difference by subtracting the current number from the target
            const diff = target - num
            // If this difference exists in our map, it means we've found ther pair, so I will return their indices
            if (diff in maps) return [maps[diff], i]

            // Otherwise, I will store the current number with its index for future reference
            maps[num] = i

        }

        // The Time complexity is O(n) because, we iterate though the array once
        // The Space complexity is O(n), we may store up to n element in the map



    }
}
