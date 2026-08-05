class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let keys = {}

        for (let str of strs) {
            let sortKey = str.split("").sort().join("")
            keys[sortKey] = keys[sortKey] || []
            keys[sortKey].push(str)

        }

        return Object.values(keys)






















        // const keys = {}

        // for (let i = 0; i <= strs.length - 1; i++) {
        //     const sortStr = strs[i].split('').sort().join("")

        //     keys[sortStr] = keys[sortStr] || []

        //     keys[sortStr].push(strs[i])
        // }

        // return Object.values(keys)






    }
}
