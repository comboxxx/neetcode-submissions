class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // To solve this problem, I will use a Set to make all the number unique
        const setNum = new Set(nums);
        // Next, I will create the longest variable to store the longest consecutive lenght
        let longest = 0;

        // Next, I will iterate though each number in the Set
        for (const n of setNum) {
            // I will find the starting number of the sequence
            // If there is no n-1 number exist in the Set, it means we found the starting number
            if (!setNum.has(n - 1)) {
                // I will declare a variable to store the current consecutive sequence length
                let length = 1;
                // I will iterate as long as we still keep finding the next consecutive number
                while (setNum.has(n + length)) {
                    length++;
                }

                // If there is no more consecutive number in the current sequence, I will store the the current length
                // to the longest variable
                longest = Math.max(longest, length); // but I have to compare with the previous longest number first, so I can store the highest number
            }
        }
        // After the loops finish, I will return the longest consecutive sequence length
        return longest;
    }
}
