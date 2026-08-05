class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const keys = {}

        for (let i = 0; i <= strs.length - 1; i++) {
            const sortStr = strs[i].split('').sort().join("")

            keys[sortStr] = keys[sortStr] || []

            keys[sortStr].push(strs[i])
        }

        return Object.values(keys)






        // const keys = {}
        // for (let i = 0; i < strs.length; i++) {
        //     let text = strs[i]
        //     const currentKey = text.split("").sort().join("")
        //     if (!keys[currentKey]) keys[currentKey] = []
        //     if (currentKey in keys) {
        //         keys[currentKey].push(text)
        //     }
        // }
        // return Object.values(keys)
    }
}
