class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        const helper = (left, right) => {
            if (left >= right) return;

                let tempLeft = s[left];
                s[left] = s[right];
                s[right] = tempLeft;

            left++;
            right--;
            helper(left, right);
        };

        let left = 0;
        let right = s.length - 1;
        helper(left, right);
    }
}
