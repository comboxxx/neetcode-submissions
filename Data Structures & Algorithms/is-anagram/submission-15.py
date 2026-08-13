class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        bucket = [0] * 26

        for char in s:
            bucket[ord(char) - ord("a")] += 1

        for char in t:
            bucket[ord(char) - ord("a")] -= 1

        return bucket == [0] * 26
