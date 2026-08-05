class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {


        // To solve this in O(n), I use a two-pass approach

        // The fist pass, I iterate forward to create prefix products and store them in the result array
        // Each position will contain the product of all elements to its left

        let res = []
        let prefix = 1

        for (let i = 0; i < nums.length; i++) {
            res[i] = prefix
            prefix *= nums[i]
        }

        // In the second pass, I iterate backward to multiply each element by the posfix product
        // which represent the product of all elements to its right

        let postfix = 1

        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] *= postfix
            postfix *= nums[i]
        }

        return res


        // The Time complexity is O(n) because we travers the array twice
        // The Space complexity is also O(n) because we allocate the result array of size n
        // However if we exclude the output array, the Space complexity will be O(1) because we only declare a constand variables



















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
