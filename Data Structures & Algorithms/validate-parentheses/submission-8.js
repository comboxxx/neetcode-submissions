class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;
        let stack = [];
        const closeToOpen = {
            "}": "{",
            "]": "[",
            ")": "(",
        };

        for (const char of s) {
            if (!closeToOpen[char]) {
                stack.push(char);
                continue;
            }

            if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[char]) {
                stack.pop();
                continue;
            }

            return false;
        }

        return stack.length === 0;
    }
}
