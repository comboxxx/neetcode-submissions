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
            const height = Math.min(heights[left], heights[right]);
            const width = right - left;
            area = Math.max(height * width, area);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return area;
    }
}
