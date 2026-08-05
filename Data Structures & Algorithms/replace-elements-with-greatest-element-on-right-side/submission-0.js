class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for (let i = 0; i < arr.length; i++) {
            let highest = 0;

            if (i === arr.length - 1) {
                arr[i] = -1;
                continue;
            }

            for (let j = i + 1; j < arr.length; j++) {
                highest = Math.max(highest, arr[j]);
            }

            arr[i] = highest;
        }

        return arr;
    }
}
