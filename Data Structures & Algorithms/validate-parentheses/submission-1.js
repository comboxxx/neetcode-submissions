class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;

        const closeToOpen = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        const open = {
            "(": true,
            "[": true,
            "{": true,
        };

        let stack = [];

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (open[char]) {
                stack.push(char);
                continue;
            }

            if (closeToOpen[char] !== stack.pop()) return false;
        }

        if (stack.length > 0) return false;

        return true;
    }
}
