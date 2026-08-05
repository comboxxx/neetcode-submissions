class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let p1 = 0;
        let p2 = numbers.length - 1;

        while (p1 < p2) {
            let sum = numbers[p1] + numbers[p2];
            if (sum === target) return [p1 + 1, p2 + 1];
            if (sum > target) {
                p2--;
                continue;
            }
            console.log("sum2", sum);

            p1++;
        }
    }
}
