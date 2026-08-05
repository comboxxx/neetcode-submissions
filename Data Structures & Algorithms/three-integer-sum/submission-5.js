class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // To solve this problem I will use a Two-pointer approach from opposite ends.
        // 1. I will sort the nums array first so that I can determine whether I need to shift left or right pointer inward for the next comparison
        // 2. I will iterate throught each number in the array
        // 3. Inside the loop I will have an early exit condition when nums[i] is grater than 0, why ? because we did sorted the array and I will always be the lowest value in each comparison
        // So if i is greater than 0, we can stop the iterate right always
        // 4. Next, the problem condition is to not include the duplicates triplets in the result array
        // So I will have one condition for skipping the current loop when the current nums[i] is equal to the previous one nums[i-1]
        // 5. I will declare left and right pointer for using in the comparison logic
        // The left should start at i+1 because we will place the left pointer next by i at the right side
        // The right pointer will always be placed at the last index of the array
        // 6. I will create another loop inside using while loop while left is less than right
        // 7. Inside the inner loop, I will declare an auxiliary variable to store the sum of three pointers
        // 8. The condition is to compare the sum with 0, if the sum is less than 0, we will increase left by 1
        // If the sum is greater than 0, we will decrease right by 1 (inward shifting)
        // The last condition, if sum is equal to 0, we will add the triplet to the result array
        // Next important thing, we need to consider ther left and right position, first after we collected the triplet, we need to shift left and right pointer inward by 1 position
        // But there is a chance that shifting left and right by one postion is not enought incase that the array included multiple duplicate numbers
        // like [-1,-2,-2,-2,1,2,4,4,5], so -2 and 4 will be a problem
        // We need 2 loops left and right pointer, to shift pointer inward until it reach a non-duplicate number
        // after this, we can end the current loop
        // so you will see that we have two steps to skip the duplicate nubmers, first one we skip the number at the outer loop
        // second one is we skip number at ther inner loop, these stepp ensure that we will not add duplicate triplets inthe the result

        nums.sort((a, b) => a - b); // ASC
        const res = []; // the result array

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break; // Stop the operation
            if (nums[i] === nums[i - 1]) continue; // Skip current loop to prevent using the duplicate number

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum < 0) {
                    left++;
                } else if (sum > 0) {
                    right--;
                } else {
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;

                    // We need te prevent the problem that next loop will be using the duplication number as current loop
                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                }
            }
        }

        return res;

        // The Time complexity is O(n^2) because we do have a nested loop inside
        // The Space complexity is O(1) or O(n) depends if the result array is excluded in the problem
    }
}
