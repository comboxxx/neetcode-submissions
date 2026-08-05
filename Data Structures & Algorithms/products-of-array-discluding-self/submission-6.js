class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1;
        let product = [];
        for (const n of nums) {
            product.push(prefix);
            prefix *= n;
        }

        let postfix = 1;
        for (let i = product.length - 1; i >= 0; i--) {
            product[i] *= postfix;
            postfix *= nums[i];
        }

        return product
    }
}
