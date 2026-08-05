class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let area = 0;

        while (left < right) {
            let width = right - left;
            let height = Math.min(heights[left], heights[right]);
            area = Math.max(width * height, area);

            // if (heights[left] < heights[right]) {
            //     left++;
            // } else {
            //     right--;
            // }

            if (heights[left] > heights[right]) {
                right--;
            } else {
                left++;
            }
        }

        return area;
    }
}
