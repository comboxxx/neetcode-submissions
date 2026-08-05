class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for (var str of strs) {
            result += `${str.length}#${str}`
        }

        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let result = []
        let i = 0
        while (i < str.length) {
            let j=i
            while (str[j] !== "#"){
                j++
            }


            let length = parseInt(str.substring(i,j))

            let startOfWord = j+1
            let endOfWord = startOfWord +length
            result.push(str.substring(startOfWord, endOfWord))

            i = endOfWord
        }

        return result
    }
}
