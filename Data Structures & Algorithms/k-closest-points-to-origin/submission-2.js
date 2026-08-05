class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    quickSort(arr, k, s = 0, e = arr.length - 1) {
        if (e - s + 1 <= 1) return arr;

        let pivot = arr[e];
        let left = s;

        for (let i = s; i < e; i++) {
            const distI = arr[i][0] ** 2 + arr[i][1] ** 2;
            const distpivot = pivot[0] ** 2 + pivot[1] ** 2;

            if (distI < distpivot) {
                let temp = arr[left];
                arr[left] = arr[i];
                arr[i] = temp;
                left++;
            }
        }

        arr[e] = arr[left];
        arr[left] = pivot;

        if (left === k) {
            return arr.slice(0, k);
        }
        if (left < k) {
            this.quickSort(arr, k, left + 1, e);
        } else {
            this.quickSort(arr, k, s, left - 1);
        }

        return arr.slice(0, k);
    }
    kClosest(points, k) {
        return this.quickSort(points, k);
    }
}
