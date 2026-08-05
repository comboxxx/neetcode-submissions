class Solution {
    /**
     * @param {sing} s
     * @return {boolean}
     */
    isAlphanumeric(char) {
        return /[a-z0-9]/i.test(char)
    }

    isPalindrome(s) {

        let left = 0
        let right = s.length - 1

        while (left < right) {


            if (!this.isAlphanumeric(s[left])) {
                left++;
                continue;
            }

            if (!this.isAlphanumeric(s[right])) {
                right--;
                continue;
            }

            console.log("left", s[left])
            console.log("right", s[right])

            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
            left++
            right--
        }

        return true

    }
}
