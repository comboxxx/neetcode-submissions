class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let area = 0;

        for (let i = 0; i < heights.length; i++) {
            let width = right - left;
            let height = Math.min(heights[left], heights[right]);
            area = Math.max(width * height, area);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return area;
    }
}
