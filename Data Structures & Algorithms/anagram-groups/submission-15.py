class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        bucket_map = collections.defaultdict(list)

        for s in strs:
            buckets = [0] * 26

            for char in s:
                buckets[ord(char) - ord("a")] += 1

            bucket_map[tuple(buckets)].append(s)

        print(bucket_map.values())

        return list(bucket_map.values())
