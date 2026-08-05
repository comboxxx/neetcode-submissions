class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const keys = {}
        for (let i = 0; i < strs.length; i++) {
            let text = strs[i]
            const currentKey = text.split("").sort().join("")
            if (!keys[currentKey]) keys[currentKey] = []
            if (currentKey in keys) {
                keys[currentKey].push(text)
            }
        }
        return Object.values(keys)
    }
}
