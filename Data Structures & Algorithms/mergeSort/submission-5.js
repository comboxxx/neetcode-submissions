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

    mergeTwoList(l1, l2) {
        if (!l1 || l1.length == 0) return l2;
        if (!l2 || l2.length == 0) return l1;

        let i = 0;
        let j = 0;

        let res = [];
        while (i < l1.length && j < l2.length) {
            if (l1[i].key <= l2[j].key) {
                res.push(l1[i]);
                i++;
            } else {
                res.push(l2[j]);
                j++;
            }
            console.log(res);
        }
        // if (i < l1.length - 1) res = [...res, ...l1.slice(i)];
        // if (j < l2.length - 1) res = [...res, ...l2.slice(j)];

        res = [...res, ...l1.slice(i), ...l2.slice(j)];

        // console.log("i", i);
        // console.log("j", j);

        return res;
        // return res.concat(l1.slice(i)).concat(l2.slice(j));
    }

    mergeSort(pairs) {
        if (!pairs || pairs.length === 0) return [];
        if (pairs.length === 1) return pairs;

        const middle = Math.floor(pairs.length / 2);
        const leftSide = pairs.slice(0, middle);
        const rightSide = pairs.slice(middle);

        const l1 = this.mergeSort(leftSide);
        const l2 = this.mergeSort(rightSide);

        return this.mergeTwoList(l1, l2);
    }
}
