class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};

        for (const s of strs) {
            const count = new Array(26).fill(0);

            for (const c of s) {
                count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }

            const key = count.join("ม");
            if (!res[key]) res[key] = [];
            res[key].push(s);
        }

        console.log(res);

        return Object.values(res);
    }
}
