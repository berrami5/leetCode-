class Solution {
private: 
    int BFS (vector<vector<int>>&arr, int X_axis, int Y_axis) {
        if (X_axis == arr.size() || X_axis < 0 || Y_axis == arr[0].size() || Y_axis < 0 || arr[X_axis][Y_axis] == 0)return 0;
        int x[] = {1,-1,0,0}, y[] = {0,0,1,-1};
        arr[X_axis][Y_axis] = 0;
        int length = 1;
        for (int i = 0 ; i < 4 ; i++) {
            length +=  BFS(arr, X_axis + x[i] , Y_axis + y[i]);
        }
        return length;
    }
public:
    int maxAreaOfIsland (vector<vector<int>>& grid) {
        int res = 0;
        int  temp;
        for (int i = 0; i < grid.size(); i++) {
            for (int j = 0 ; j < grid[0].size(); j++) {
                if (grid[i][j]) {
                    temp =  BFS(grid, i, j);
                    res = res > temp ? res : temp;
                }
            }
            
        }
        return res;
    }
};