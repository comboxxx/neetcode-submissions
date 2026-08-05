class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        let sum = 0;

        for (const op of operations) {
            const num = Number(op);
            if (!isNaN(num)) {
                sum += num;
                stack.push(num);
            } else if (op === "+") {
                const newVal = stack[stack.length - 2] + stack[stack.length - 1];
                sum += newVal;
                stack.push(newVal);
            } else if (op === "D") {
                const newVal = stack[stack.length - 1] * 2;
                sum += newVal;
                stack.push(newVal);
            } else if (op === "C") {
                sum -= stack.pop();
            }
        }

        return sum;
    }
}
