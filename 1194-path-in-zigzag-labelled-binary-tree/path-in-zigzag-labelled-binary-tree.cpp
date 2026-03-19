class Solution {
public:
    vector<int> pathInZigZagTree(int label) {
        int m = label;
        int n = (int)floor(log2(m));
        const int arrayLength = (int)floor(log2(m)); 
        vector<int> arr;
        arr.push_back(label);
        while (n > 0) {
            int equation = floor(pow(2,n) - m / 2 - 1 + pow(2,n-1));
            arr.insert(arr.begin() , equation);
            m = equation;
            n--;
        }
        
        return arr;
    }
};