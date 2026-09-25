class Solution {
private: 
    void BFS (vector<vector<char>>&arr, int X_axis, int Y_axis) {
        if (X_axis == arr.size() || X_axis < 0 || Y_axis == arr[0].size() || Y_axis < 0 || arr[X_axis][Y_axis] == '0')return;
        int x[] = {1,-1,0,0}, y[] = {0,0,1,-1};
        arr[X_axis][Y_axis] = '0';
        for (int i = 0 ; i < 4 ; i++) {
            BFS (arr, X_axis + x[i] , Y_axis + y[i]);
        }
    }
public:
    int numIslands(vector<vector<char>>& grid) {
        int res = 0;
        for (int i = 0; i < grid.size(); i++) {
            for (int j = 0 ; j < grid[0].size(); j++) {
                if (grid[i][j] == '1') {
                    res++;
                    BFS(grid, i, j);
                }
            }
            
        }
        return res;
    }
};