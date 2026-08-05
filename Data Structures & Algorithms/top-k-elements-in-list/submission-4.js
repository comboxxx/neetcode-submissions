class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // To solve this problem, I will use a Hash Map to store the frequency of each number
        const map = {};

        // Next, I will iterate thorugh each number to store the frequency
        for (const n of nums) {
            map[n] = (map[n] || 0) + 1;
        }

        // Next, I will create a bucket array to store each each number to each index
        const bucket = Array.from({ length: nums.length + 1 }, () => []);

        // Next, I will add each number into the bucket
        // I will convert the Hah map to an array, which has key as the number and the value is its frequency
        for (const [number, count] of Object.entries(map)) {
            // I will store each number to the index of the bucket, the index will be the same number as the Frequent of it
            bucket[count].push(number);
        }

        // Next, let collect the most k frequent elements
        // I will iterate thorugh each element in the bucket
        const res = [];
        for (let i = bucket.length - 1; i >= 0 && res.length < k; i--) {
            // Next, I will skip the loop if the current bucket is empty
            if (bucket[i].length === 0) continue;

            // Next, let's store each number from the bucket to result array
            for (const n of bucket[i]) {
                res.push(Number(n));
                // Each time after we added the number to the result array
                // we need to check if the length of result is equal to key
                // If it does, so we return the most k frequent numbers
                if (res.length === k) return res;
            }
        }

        // If the loop finish and the total amount of frequent number is still not equal to key
        // I will return the result array anyway with the total frequent amount we got from the loop
        return res;

        // The Time complexity is O(n)
        // The Space comlexity is O(n)
    }
}
