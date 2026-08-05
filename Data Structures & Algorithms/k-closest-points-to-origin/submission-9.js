class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    // To solve this proplem, I will use a Quick selection approach
    // First, we need to add s and end index parameters
    kClosest(points, k, s = 0, e = points.length - 1) {
        // Next, let declare a base case here
        // We will have end minus start index then plus 1
        // if the result is less than or equal to 1, so its mean this array is already sorted
        // So will can return the array with the first k indices
        if (e - s + 1 <= 1) return points.slice(0, k);

        // Next, let's delcare the pivot
        // In the common case the pivot uasually placed on the last index of an array
        const pivot = points[e];
        // Next, we need a left pointer for swapping the data
        // the left pointer should start at the current start index
        let left = s;

        // NExt, will iterate through each elements for sorting
        for (let i = s; i < e; i++) {
            // I use for loop because I need another pointer for comparison betweem current data
            // at i and the pivot
            // Next, we need to calculate the distance from both i and pivot
            // So the formula is sqrt((x1 - x2)^2 + (y1-y2)^2)
            // but to optimize this, I will not use Math.sqrt because it consumes a lot of CPU
            // I will just use a squared value because the relative order of the distances remains the same
            const distI = points[i][0] ** 2 + points[i][1] ** 2;
            const distPivot = pivot[0] ** 2 + pivot[1] ** 2;

            // Here we got both distances now, let's go for the comparison
            if (distI < distPivot) {
                [points[left], points[i]] = [points[i], points[left]]; // Using this swapping approach, I don't have to delcare the temporary variable

                // Next, let's shift left pointer to the right
                left++;
            }
        }

        // After the loop end, we need to swap the data of pivot pointer with the data of left pointer
        [points[left], points[e]] = [points[e], points[left]];

        // Next, I will implement the Quick select logic, so in the best case, if we are able to sort the fist k data at the left
        // So we don't need to continue sort data at the right side

        if (left === k) {
            return points.slice(0, k); // let's return the array but only the first k indices
        } else if (left < k) {
            // In the other case, if left is less than k, we have to continure sorting at the right side
            return this.kClosest(points, k, left + 1, e);

            // the reason I send the start index as left+1 because the pivot is already in its sorted position
        } else {
            // Next, we also need to send an array to sorted at the left side as a normal flow
            return this.kClosest(points, k, s, left - 1);
            // I send left-1 because we won't include pivot at the next sorting step
        }

        // The Time complexity is O(n) because we use Quick select instead of Quick sorting O(n log n)
        // but the worst case is O(n^2) if the tree become a skewed line.
        // The Space comlexity is O(log n), the worst case in O(n)

        // To optimize this, we can randomize pivot position, so the chance that Time and Space complexity will be rise up to the worst caes is almost 0
    }
}
