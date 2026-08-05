class Solution:
    def encode(self, strs: List[str]) -> str:
        res = ""
        for s in strs:
            res += f"{len(s)}#{s}"

        return res

    def decode(self, s: str) -> List[str]:
        res = []
        i = 0
        while i < len(s):
            j = i
            while s[j] != "#":
                j += 1

            length = int(s[i:j])
            start_of_word = j + 1
            end_of_word = start_of_word + length
            res.append(s[start_of_word:end_of_word])

            i = j + 1 + length

        return res
