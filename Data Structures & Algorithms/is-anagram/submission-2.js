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


        // let count = {}
        // if (s.length !== t.length) return false

        // for (let i = 0; i < s.length; i++) {
        //     let char = s[i].toLowerCase()
        //     if (!count[char]) count[char] = 0
        //     count[char]++
        // }

        // for (let i = 0; i < t.length; i++) {
        //     let char = t[i].toLowerCase()

        //     if(!count[char]) return false

        //     count[char]--
        // }

        // return true

    }
}
