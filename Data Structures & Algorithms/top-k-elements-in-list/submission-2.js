class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};

        for (const n of nums) {
            map[n] = (map[n] || 0) + 1;
        }

        let numArray = Object.entries(map);

        let sortedNumArr = numArray.sort((a, b) => b[1] - a[1]);

        let res = [];
        for (let i = 0; i < k; i++) {
            res.push(sortedNumArr[i][0]);
        }

        return res;
    }
}
