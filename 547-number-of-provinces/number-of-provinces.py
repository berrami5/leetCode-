class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        i = 0
        res = 0
        size = len(isConnected)
        boolien = [0] * size
        while (i < size):
            isConnected[i][i] = 0
            if boolien[i] == False:
                DFS(isConnected, i , boolien, size)
                res+=1
            i+=1
        
        return res

def DFS (graph, start, boolien, size):
    boolien[start] = 1
    for i in range(0, size):
        if (graph[start][i] == 1 and boolien[i] == 0) :
            DFS(graph, i, boolien, size)