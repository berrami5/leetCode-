class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        result = []
        arr1 = [["("*n]]
        arr2 = [(n - i)*")" for i in range(n)]
        arr = [i for i in range(n*2) if i % 2]

        for i in range(n-1):
            arr1.extend([helper(arr1[i] , arr[i] , n)])

        for i in range(n):
            result.extend(arr1[i][ind]+arr2[i] for ind in range(len(arr1[i])))
        
        return list(set(result))

def helper (arr,start , n):
    res = []
    for ind in range(len(arr)):
        a = arr[ind]
        res.extend([a[0:start+i]+")"+a[start+i:] for i in range(n)])
    return res