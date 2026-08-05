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
    quickSort(pairs, s = 0, e = pairs.length - 1) {
        if (e - s + 1 <= 1) return pairs;

        const pivot = pairs[e];
        let left = s;

        for (let i = s; i < e; i++) {
            if (pairs[i].key < pivot.key) {
                let temp = pairs[left];
                pairs[left] = pairs[i];
                pairs[i] = temp;
                left++;
            }
        }

        pairs[e] = pairs[left];
        pairs[left] = pivot;

        this.quickSort(pairs, s, left - 1);
        this.quickSort(pairs, left + 1, e);

        return pairs;
    }
}
