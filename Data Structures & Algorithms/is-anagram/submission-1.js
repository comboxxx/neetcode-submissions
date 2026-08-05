class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let count = {}
        if (s.length !== t.length) return false

        for (let i = 0; i < s.length; i++) {
            let char = s[i].toLowerCase()
            if (!count[char]) count[char] = 0
            count[char]++
        }

        for (let i = 0; i < t.length; i++) {
            let char = t[i].toLowerCase()

            if(!count[char]) return false

            count[char]--
        }

        return true

    }
}
