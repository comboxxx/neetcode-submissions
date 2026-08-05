class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ''

        for (let str of strs) {
            result += (`${str.length}#${str}`)
        }

        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0; // ตัวชี้ตำแหน่งปัจจุบันใน string

        while (i < str.length) {
            let j = i

            while (str[j] !== "#") {
                j++
            }

            const length = parseInt(str.substring(i, j))

            let startOfWard = j + 1
            let endOfWard = startOfWard + length

            let word = str.substring(startOfWard, endOfWard)

            result.push(word)

            i = endOfWard
        }



        return result
    }
}