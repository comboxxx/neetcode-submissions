class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */


    // I use a Length-Prefix approach, For endcoding, I prepend each string with its length followed by a delimiter
    // This ensures we can handle any character within the strings by themseleves
    encode(strs) {
        let res = ""
        for (const str of strs) {
            res += `${str.length}#${str}`
        }

        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // During encoding, I user two pointers, first pointer finds the delimiter to extract the length
        // and then I jump directly to the end of that word using that length

        let res = []
        let i = 0

        while (i < str.length) {
            let j = i
            while (str[j] !== "#") {
                j++
            }
            const length = Number(str.substring(i, j))
            const startOfWord = j + 1
            const endOfWord = length + startOfWord

            res.push(str.substring(startOfWord, endOfWord))

            i = j + 1 + length
        }

        return res

        // The Time complexity is O(n) because we iterate though the string array once
        // The Space complexity is also O(n) to store the decode result in the array


    }
}
