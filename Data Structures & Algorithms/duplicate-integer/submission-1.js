class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let count = {}

        for (let num of nums){

            console.log(num)
            if(count[num]) return true

            count[num] = true
        }

        return false
    }
}
