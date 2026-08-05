class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let left = m - 1;
        let right = n - 1;
        let middle = m + n - 1;

        // for (let i = 0; i < m + n; i++) {
        while (right >= 0) {
            //     if (left < 0 || nums2[right] > nums1[left]) {
            //         nums1[middle] = nums2[right];
            //         right--;
            //     } else {
            //         nums1[middle] = nums1[left];
            //         left--;
            //     }
            if (left < 0 && right >= 0) {
                nums1[middle] = nums2[right];
                right--;
            } else if (left >= 0 && nums1[left] >= nums2[right]) {
                nums1[middle] = nums1[left];
                left--;
            } else {
                nums1[middle] = nums2[right];
                right--;
            }

            // if (left < 0 || right < 0) break;

            middle--;
        }
    }
}
