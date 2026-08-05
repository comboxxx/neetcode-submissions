class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        let count = {}
        for (let char of s) {
            const lowerCaseChar = char.toLowerCase()
            if (!count[lowerCaseChar]) count[lowerCaseChar] = 0
            count[lowerCaseChar]++
        }

        for(let char of t){
            const lowerCaseChar = char.toLowerCase()

            if(!count[lowerCaseChar]) return false

            count[lowerCaseChar]--
        }

        return true

    }
}
