/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeTwoArray(arr1, arr2) {
        let i = 0;
        let j = 0;
        const res = [];
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i].key <= arr2[j].key) {
                res.push(arr1[i]);
                i++;
            } else {
                res.push(arr2[j]);
                j++;
            }
        }

        return res.concat(arr1.slice(i)).concat(arr2.slice(j));
    }

    mergeSort(pairs) {
        if (!pairs || pairs.length === 0) return [];
        if (pairs.length === 1) return pairs;

        const mid = Math.floor(pairs.length / 2);
        const leftSide = pairs.slice(0, mid);
        const rightSide = pairs.slice(mid);

        const arr1 = this.mergeSort(leftSide);
        const arr2 = this.mergeSort(rightSide);

        return this.mergeTwoArray(arr1, arr2);
    }
}
