class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        left = m - 1
        right = n - 1
        middle = m + n - 1

        while right >= 0:
            if left >= 0 and nums1[left] > nums2[right]:
                nums1[middle] = nums1[left]
                left -= 1
            else:
                nums1[middle] = nums2[right]
                right -= 1
            middle -= 1


        """
        Do not return anything, modify nums1 in-place instead.
        """
