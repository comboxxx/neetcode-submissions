class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNumeric(char) {
        return /[a-z0-9]/i.test(char)
    }

    isPalindrome(s) {
        let left = 0
        let right = s.length - 1

        while (left < right) {
            if (!this.isAlphaNumeric(s[left])) {
                left++
                continue
            }

            if (!this.isAlphaNumeric(s[right])) {
                right--
                continue
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false

            left++
            right--
        }

        return true
    }
}
