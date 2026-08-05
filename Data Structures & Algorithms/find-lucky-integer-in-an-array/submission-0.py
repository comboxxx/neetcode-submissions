class Solution:
    def findLucky(self, arr: List[int]) -> int:
        num_map = collections.defaultdict(int)
        lucky_map = collections.defaultdict(bool)
        for i in range(len(arr)):
            num_map[arr[i]] += 1

            if num_map[arr[i]] == arr[i]:
                lucky_map[arr[i]] = True
            else:
                lucky_map.pop(arr[i], None)

        if len(lucky_map) > 0:
            return max(list(lucky_map))

        return -1
