class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // To solce this problem, I will use a two-pointers approach
        let left = 0,
            right = numbers.length - 1;

        // I will iterate until left is not less than right
        while (left < right) {
            // Next, I will return the indices if sum is equal to the target
            const sum = numbers[left] + numbers[right];
            if (sum === target) return [left + 1, right + 1];

            // Otherwise, if sum is lesser than the target, I will move the left pointer by 1 position
            if (sum < target) left++;
            else right--; //Or else, sum is greater than the target, I will move the right pointer by 1 postion
        }
    }
}
