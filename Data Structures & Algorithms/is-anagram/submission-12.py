class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        first_array = [0] * 26
        second_array = [0] * 26

        for char in s:
            char_code = ord(char) - ord("a")
            first_array[char_code] += 1
        
        for char in t:
            char_code = ord(char) - ord("a")
            second_array[char_code] += 1

        return first_array == second_array
