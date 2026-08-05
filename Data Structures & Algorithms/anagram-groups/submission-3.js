class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}

        for (let str of strs) {
            const sortedKey = str.split("").sort().join("")
            if (!map[sortedKey]) map[sortedKey] = []

            map[sortedKey].push(str)
        }

        return Object.values(map)
    }
}
