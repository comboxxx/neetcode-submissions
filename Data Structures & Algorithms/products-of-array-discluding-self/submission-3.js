class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        // First I will create a prefix with 1 as a value, so when I iterate through each number in the array,
        // I can calculate the product of all indices except the first one

        let res = []
        let prefix = 1

        for (let i = 0; i < nums.length; i++) {
            res[i] = prefix
            prefix *= nums[i]
        }


        // Next, I create postfix which has 1 as a value so I can iterate backward to calculate all products except the last index of an array

        let postfix = 1

        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] *= postfix
            postfix *= nums[i]
        }

        return res

        // The Time complexity is O(n) because we iterate n strings in the array
        // The space complexity is also O(n) because we store all the product result in the array


























        // let res = []
        // let prefix = 1
        // for (let i = 0; i < nums.length; i++) {
        //     res[i] = prefix
        //     prefix *= nums[i]
        // }

        // let postfix = 1
        // for (let i = nums.length - 1; i >= 0; i--) {
        //     res[i] *= postfix
        //     postfix *= nums[i]
        // }

        // return res

    }
}
