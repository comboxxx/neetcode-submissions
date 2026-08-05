class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let numCount = {}

        for (let num of nums) {
            numCount[num] = (numCount[num] || 0) + 1
        }

        let numCountArray = Object.entries(numCount)

        let sortNumArray = numCountArray.sort((a, b) => b[1] - a[1])

        let result = []
        for (let i = 0; i < k; i++) {
            result.push(sortNumArray[i][0])
        }
        return result
    }
}
