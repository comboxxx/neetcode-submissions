class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        const count = { 0: 0, 1: 0 };

        for (const preference of students) {
            count[preference]++;
        }

        for (const s of sandwiches) {
            if (count[s] > 0) {
                count[s]--;
            } else {
                return count[0] + count[1];
            }
        }

        return 0;
    }
}
