class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // First, I will check for early return if the length don't match
        if (s.length !== t.length) return false


        // Next, I will count the character frequencies of the s string by using Hash Map
        const charCount = {}

        for (let char of s) {
            charCount[char] = (charCount[char] || 0) + 1
        }

        // Next, I will check if the all character from two strings matched
        for (let char of t) {
            // If the character doesn't exist or count become zeo, return false
            if (!charCount[char]) return false

            // Otherwise, I will decrease character count by 1 for each loop
            charCount[char]--
        }

        // If the loop finish without character mismatched, it's anagram, return true
        return true

    }

// The Time complexity is O(n) because, we iterate each string only once
// The Space complexity is O(26), this is considered as O(1) because the size of the map is capped by aplphabet size.

}
