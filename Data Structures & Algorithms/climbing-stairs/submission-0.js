class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // To solve this problem, I will iterate through each stair step as the Bottom-up order
        // to count the distinct ways to climb to the top of the stair

        // First I will add early return logic or we can call it a Base case
        if (n <= 2) return n;

        let first = 1;
        let second = 2;

        // Next, I will do the iteration to find the distinct ways
        // I will start from the third step because we already have a Base case
        // to return when n is equal to 1 or 2
        for (let i = 3; i <= n; i++) {
            // First thing to do in the loop, we have to calcualate the total distinct ways first
            // the result will be total sum of distinct ways from the last 2 previous steps
            let current = first + second;
            //Next I will update the first to be equal to second step
            first = second;
            // Then I will update second to the current
            second = current;
            // So we can use both value to calculate total distinct ways for the next step
        }


        // After the loop finish, I will returb second because it hold the latest value of total distinct ways
        return second

        // The Time complexity is O(n) because we may iterate up to n numbers
        // The Space complexity is O(1) because we only declared a constant variables to store distinct ways numbers
    }
}
