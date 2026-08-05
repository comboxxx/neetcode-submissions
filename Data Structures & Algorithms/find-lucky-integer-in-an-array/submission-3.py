class Solution:
    def findLucky(self, arr: List[int]) -> int:
        num_map = defaultdict(int)

        for i in arr:
            num_map[i] += 1

        largest_lucky = -1

        for k, v in num_map.items():
            if k == v:
                largest_lucky = max(largest_lucky, k)
        
        return largest_lucky
