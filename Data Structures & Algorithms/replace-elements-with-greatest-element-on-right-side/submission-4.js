class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        // To solve this problem, I will use a backward iteration approach

        // I will declare a maxSoFar value as -1
        let maxSoFar = -1;

        // I will iterate backward through each number to find the maxSoFar value and update in-place for each index
        for (let i = arr.length - 1; i >= 0; i--) {
            // I will declare the temporay varible to store current number
            const currentNumber = arr[i];

            // I will update maxSoFar to the current number in-place
            arr[i] = maxSoFar;

            // I will compare the temporary current number with the maxSoFar to store the highest value
            maxSoFar = Math.max(maxSoFar, currentNumber);
        }

        // I will return the updated array result
        return arr;


        // The Time complexity is O(n) because we traverse the array once
        // The Space complexity is O(1) because we only declare a constant values
    }
}
