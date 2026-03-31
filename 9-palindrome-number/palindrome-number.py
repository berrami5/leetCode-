class Solution:
    def isPalindrome(self, x: int) -> bool:
        string = str(x)
        i = 0 
        length = len(string) - 1
        while i < length - i:
            if string[i] != string[length - i]:
                return False
            i+=1
        
        return True