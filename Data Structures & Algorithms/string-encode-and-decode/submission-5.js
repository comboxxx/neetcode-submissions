class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (const s of strs) {
            res += `${s.length}#${s}`;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }

            const length = Number(str.slice(i, j));
            const startOfWord = j + 1;
            const endOfWord = length + startOfWord;

            res.push(str.slice(startOfWord, endOfWord));

            i = endOfWord;
        }

        return res
    }
}
