class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        // To solve this problem, I will use a Bucket sorting approach
        // because we know the exact number range

        // First, I will declare the array to store the buckets
        const buckets = new Array(3).fill(0);

        // Next, let's collect all the count of each number and store them in the buckets
        for (const n of nums) {
            buckets[n]++;
        }

        // After we collect each total count, let sort the original array in-place
        // First thing, I will create i pointer so we can update each index of the original array using this pointer
        let i = 0;
        // So we will have a nested loop here
        // The outer loop will iterate through each number
        for (let n = 0; n < buckets.length; n++) {
            // Next, the inner will be used to override each index of the original array
            for (let j = 0; j < buckets[n]; j++) {
                // let's write the logic to override the value
                // we are going to override each index of the original array
                nums[i] = n; // n is the current number
                i++; // then we have to shift the i pointer to the right each time we override the value
            }
        }

        // That's it, this is how Bucket sort works
        // The Time complexity will always be O(n) because even we have a nested loop
        // we only iterate n times which represent the size of the original array
        // The Space complexity is O(n) because we have an extra array to store total count of each number
    }
}
