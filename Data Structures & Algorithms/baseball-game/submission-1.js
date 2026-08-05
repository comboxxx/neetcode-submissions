class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let res = [];
        let sum = 0;

        for (let i = 0; i < operations.length; i++) {
            let currentNum = Number(operations[i]);
            if (!isNaN(currentNum)) {
                res.push(currentNum);
                sum += Number(currentNum);
                continue;
            }

            const currentOperation = operations[i];

            const resLength = res.length;

            switch (currentOperation) {
                case "+":
                    sum += Number(res[resLength - 2]) + Number(res[resLength - 1]);
                    res.push(res[resLength - 2] + res[resLength - 1]);
                    break;
                case "D":
                    // console.log("res[i - 1] * 2", res[i - 1]);
                    sum += res[resLength - 1] * 2;
                    res.push(res[resLength - 1] * 2);
                    break;
                case "C":
                    // console.log("res[i-1]", res[i - 1]);
                    sum -= res[resLength - 1];
                    res.pop();
                    break;
            }
        }

        console.log("res", res);

        return sum;
    }
}
