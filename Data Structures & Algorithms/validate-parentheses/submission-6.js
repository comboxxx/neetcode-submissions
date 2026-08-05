class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // To solve this issue, I will use linear scan approach

        // I will create stack variable to store the open brackets
        let stack = [];

        // I will create the Hash Map to store the key as close bracket and the value as open bracket
        const closeToOpen = {
            "}": "{",
            "]": "[",
            ")": "(",
        };

        // I will loop throught each character
        for (const char of s) {
            // Let's find the open bracket first
            // If the current char is not equal to any close bracket in the map
            // it means w found the open bracket

            if (!closeToOpen[char]) {
                stack.push(char);
            } else {
                // This means current character is the close bracket
                // First, let check if the stack size is not equal to 0
                // If the size is 0, it means we never had the open bracket before
                // So we can return false
                // but at the same time, if the stack size isn't equal to 0
                // we can check it the last character of the stack is equal to
                // the open bracket of current close bracket
                if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[char]) {
                    // It they are matched, we will pop last element from the stack
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        // If the loop end with all brackets matches between close and open brackets
        // I will return true
        return stack.length === 0;
    }
}
