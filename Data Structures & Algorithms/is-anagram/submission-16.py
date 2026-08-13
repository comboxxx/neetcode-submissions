class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        bucket = [0] * 26

        for char in s:
            bucket[ord(char) - ord("a")] += 1

        for char in t:
            bucket[ord(char) - ord("a")] -= 1
        all_zero = all(count == 0 for count in bucket)
        return all_zero
