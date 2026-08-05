class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // First, I will create a Hash Map to store frequency of each number
        const count = {}

        for (const n of nums) {
            count[n] = (count[n] || 0) + 1
        }

        // Next, I create the Buckets array where index represent frequency
        const freq = Array.from({ length: nums.length + 1 }, () => [])

        for (const n in count) {
            const f = count[n]
            freq[f].push(Number(n))
        }
        const res = []
        // Finally, I iterate though the buckets to collect numbers until I reach k
        for (let i = freq.length - 1; i >= 0; i--) {
            for (const n of freq[i]) {
                res.push(n)
                if (res.length === k) return res
            }
        }
    }
    // The Time complexity is O(n) because each element processed a constand number of times across all steps
    // The Space complexity is also O(n) to store the map and bucket
}
