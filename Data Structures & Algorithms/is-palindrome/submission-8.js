class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNemeric(char) {
        return /[a-z0-9]/i.test(char);
    }
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (!this.isAlphaNemeric(s[left])) {
                left++;
                continue;
            }
            if (!this.isAlphaNemeric(s[right])) {
                right--;
                continue;
            }

            if (s[left].toLowerCase() != s[right].toLowerCase()) return false;

            left++;
            right--;
        }

        return true;
    }
}
