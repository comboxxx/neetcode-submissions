class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let ans = right;

        while (left <= right) {
            const mid = (left + right) >>> 1;
            let speed = mid;
            // let pile = piles[mid];
            // let hourSpent = Math.ceil(pile / speed);
            let totalHours = 0;
            for (const pile of piles) {
                totalHours += Math.ceil(pile / speed);
            }

            if (totalHours <= h) {
                right = mid - 1;
                ans = Math.min(ans, speed);
            } else {
                if (totalHours > h) {
                    left = mid + 1;
                    continue;
                }
                return ans;
            }
        }

        return ans;
    }
}
