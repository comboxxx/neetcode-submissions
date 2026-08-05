class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let maxSoFar = -1;

        for (let i = arr.length-1; i >= 0; i--) {
            const currentNum = arr[i];
            arr[i] = maxSoFar;
            maxSoFar = Math.max(maxSoFar, currentNum);
        }

        return arr;
    }
}
