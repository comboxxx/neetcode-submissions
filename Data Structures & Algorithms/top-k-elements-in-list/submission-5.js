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

        const bucket = Array.from({ length: nums.length + 1 }, () => []);

        for (const [num, count] of Object.entries(map)) {
            bucket[count].push(num);
        }

        const res = [];
        for (let i = bucket.length - 1; i >= 0 && res.length < k; i--) {
            if (bucket[i].length != 0) {
                for (const n of bucket[i]) {
                    res.push(n);
                    if (res.length === k) return res;
                }
            }
        }

        return res

        // console.log(bucket)
    }
}
