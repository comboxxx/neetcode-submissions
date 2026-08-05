# class Solution:
#     def isAnagram(self, s: str, t: str) -> bool:
#         if len(s) != len(t):
#             return False
#         char_map = collections.defaultdict(int)

#         for char in s:
#             char_map[char] += 1

#         for char in t:
#             if char not in char_map or char_map[char] <= 0:
#                 return False
#             char_map[char] -= 1

#         return True


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        first_array = [0] * 26
        second_array = [0] * 26

        for char in s:
            first_array[ord(char) - ord("a")] += 1
        for char in t:
            second_array[ord(char) - ord("a")] += 1

        return first_array == second_array
