class Solution:
    def search(self, nums: List[int], target: int) -> int:

        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = math.floor((left + right) / 2)

            if target < nums[mid]:
                right = mid - 1
            elif target > nums[mid]:
                left = mid + 1
            else:
                return mid

        #  while (left <= right) {
        #     const mid = Math.floor((left + right) / 2); // (3+3)/2 = 3
        #     if (target < nums[mid])
        #         right = mid - 1; // 13 < 11 ? No
        #     else if (target > nums[mid])
        #         left = mid + 1; // 13 > 11 ? Yes
        #     else return mid;
        # }

        return -1
