class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        res = 0
        for i in range(0,len(grid)):
            for j in range(0,len(grid[0])):
                if grid[i][j] == '1':
                    res += 1
                    BFS(grid, i, j)

        return res

def BFS (arr, X_axis, Y_axis):
    if (X_axis == len(arr) or Y_axis == len(arr[0]) or X_axis < 0 or Y_axis < 0 or arr[X_axis][Y_axis] == '0') :
        return 
    arr[X_axis][Y_axis] = '0'
    x = [1,-1,0,0]
    y = [0,0,1,-1]
    for i in range(0, len(x)):
        BFS(arr, x[i] + X_axis, y[i] + Y_axis)