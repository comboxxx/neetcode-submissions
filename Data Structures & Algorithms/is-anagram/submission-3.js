class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const charMap = {}
        for (let char of s) {
            let lowerCaseChar = char.toLowerCase()
            charMap[lowerCaseChar] = (charMap[lowerCaseChar] || 0) + 1
        }

        for (let char of t) {
            let lowerCaseChar = char.toLowerCase()

            if (!charMap[lowerCaseChar]) return false
            charMap[lowerCaseChar]--
        }

        return true


       

    }
}
