class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        setNum = set()

        for n in nums:
            if n in setNum:
                return True
            setNum.add(n)
        return False
