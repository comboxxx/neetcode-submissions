class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k, s = 0, e = points.length - 1) {
        // To solve this problem, I will use a Quick select approach
        // Ok, but first let me write a condition to detect the base case
        // We should have a start and end index in the function parameter section
        // start index should be 0 and end index should be the last index of the array
        // and the condition to find the base case is we have to use end index minus with start index
        // then + 1 to see if the current call stack receive array with less than or equal to 1

        if (e - s + 1 <= 1) return points.slice(0, k); // This can't be sorted anymore

        // Next, let declare a pivot
        const pivot = points[e]; // The last index of the array
        let left = s; // This pointer will be used to shift to the right when we swap the data

        // Next, let's iterate through each number
        // I will declare i and it will be equal to s index
        // The loop should continue until i is not less then e
        for (let i = s; i < e; i++) {
            // Next, I will put the condition to decide whether we need to swap the data
            // between the left and i pointer or not
            // So for the Quick sorting algorithm, we have to compare the i pointer with the pivot
            // If i is less than pivot, we will switch i with left

            // We need to calculate the distant first, then we will use the calculated distant value for the comparison
            let distI = points[i][0] ** 2 + points[i][1] ** 2;
            let distPivot = pivot[0] ** 2 + pivot[1] ** 2;
            // to optimize this we don't have to use Math.sqrt because it is computatinally expensive
            // we can use a squared values for comaparison because the relative order of the distances remains the same

            //Next, lets write the comparsion condition
            if (distI < distPivot) {
                [points[i], points[left]] = [points[left], points[i]]; // Using the approach, I don't have to declare a temparay variable to store the first data for swapping
                left++;
            }
        }

        // Next, after the loop end, we have to swap the pivot position with the latest left position
        [points[e], points[left]] = [points[left], points[e]];

        // Next, let's implement the Quick select condition

        // 3. Quick Select Logic (หัวใจสำคัญอยู่ตรงนี้)
        if (left === k) {
            // ถ้า pivot มาวางที่ตำแหน่ง k พอดี แปลว่าฝั่งซ้ายมี k ตัวแล้ว
            return points.slice(0, k);
        } else if (left < k) {
            // ฝั่งซ้ายยังมีของไม่ครบ k ตัว ต้องไปหาเพิ่มในซีกขวา
            return this.kClosest(points, k, left + 1, e);
        } else {
            // ฝั่งซ้ายมีของเกิน k ตัว ต้องไปบีบฝั่งซ้ายให้เล็กลง
            return this.kClosest(points, k, s, left - 1);
        }

        // return points.slice(0, k);

        // if (left === k) {
        //     // We will have an early exit here incase that we have a luck that we can sort the first k data before we have to proceed to sort on the right side
        //     return points.slice(0, k);
        // }
        // // If left is less than k, we have to sort the rigth side
        // else if (left < k) {
        //     // I will call the current function kClosest to recursively sort the array
        //     return this.kClosest(points, k, left + 1, e);
        // } else {
        //     // If the right side is not enough, we keep on sorting on the left side
        //     return this.kClosest(points, k, s, left - 1);

        //     // So you can see that we left+1 as a start index of sorting at the right side
        //     // and left-1 for sorting at the left side, because we will not include the middle index
        //     // for sorting at the deeper level because its position is already correct
        // }

        // Finally, I will return the array, but I will have to slice only first k indices
        // return points.slice(0, k); // This first k data, should be successfully sorted

        // The Time complexity is O(n) on average, but in the worst case it could go up to O(log n)
        // The Space complexity is O(n), even Quick sorting algorithm is an in-place sorting algorithm
        // but we need to consider the dept of recursive call stack, so this why Space complexity is not O(1)
    }
}
