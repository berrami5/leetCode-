class Solution {
private:
    void DFS (vector<vector<int>> graph, int start, vector<bool> &check, int size) {
        check[start] = 1;
        for (int i = 0 ; i < size;i++) {
            if (graph[start][i] && !check[i]) {
                graph[i][start] = 0;
                DFS(graph, i , check, size);
            }
            
        }
    }
public:
    int findCircleNum(vector<vector<int>>& isConnected) {
        int i = 0;
        int res = 0;
        int size = isConnected.size();
        vector<bool> boolien(size, 0);
        while (i < size) {
            isConnected[i][i] = 0;
            if (boolien[i] == 0) {
                DFS(isConnected, i , boolien, size);
                res++;
            }
            i++;
        }
        return res;
    }
};