class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let count = {}

        for (let i = 0; i< nums.length; i++){
            if(count[nums[i]]) return true

            count[nums[i]] = true
        }


        return false
    }
}
