class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // To solve this problem, I will make all elements from input unique by using set
        const numSet = new Set(nums)
        let longest = 0

        // I will loop through each element in set
        for (const n of numSet) {
            // If the set doesn't include lower by 1 number, so it's a starting number
            if (!numSet.has(n - 1)) {

                // I will iterate by using while loop to count the length of consecutive number
                let length = 1
                while (numSet.has(length + n)) {
                    length++
                }

                // After loop finish, I will compare the previous longest number with the current length
                longest = Math.max(longest, length)
            }
        }
        // I will return the longest length
        return longest


        // The Time complexity is O(n) because even we have a nested loop, 
        // but the parent loop will skip if the current number isn't a starting number
        // The Space complexity is a O(n) because we might store up to n numbers in the set
    }
}
