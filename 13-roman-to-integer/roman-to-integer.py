class Solution:
    def romanToInt(self, s: str) -> int:
        dic = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
        string = s + 'I'
        curr = 0
        res = 0
        length = len(string)
        while (curr < length-1) :
            if dic[string[curr]] >= dic[string[curr+1]]:res += dic[string[curr]]
            else :
                res += dic[string[curr+1]] - dic[string[curr]]
                curr+=1
            curr+=1
        return res