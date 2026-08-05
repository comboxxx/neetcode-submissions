class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        char_map = collections.defaultdict(int)

        for char in s:
            char_map[char] += 1

        for char in t:
            if not char_map[char] or char_map[char] == 0:
                return False
            char_map[char] -= 1

        return True
