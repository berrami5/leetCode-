class Solution {
private:
    string repeat (int n,  char s) {
        string res;
        for (int i = 0 ; i < n ; i++) {
            res += s;
        }
        return res;
    }
    vector<string> helper (int start, string elm) {
        vector<string> res;
        string temp = elm;
        for (int i = start ; elm[i-1] != '\0' ; i++) {
            temp.insert(i,1,')');
            res.push_back(temp);

            temp = elm;
        }
        return res;
    }
    vector<string> assebly (vector<string> vec, int start) {
        vector<string>res;
        
        for (int i = 0 ; i < vec.size() ; i++) {
            vector<string> t = helper(start,vec[i]);
            res.insert(res.end(),t.begin(),t.end());
        }
        set<string> temp(res.begin() , res.end());
        return vector<string>(temp.begin(), temp.end());
    }
    public:
    vector<string> generateParenthesis(int n) {
        vector<string> res;
        vector<string> v1;
        int start = 1;
        vector<string> output;
        v1.push_back(repeat(n,'('));
        for (int i = n ; i > 0 ; i--) {
            vector<string> t = assebly(v1,start);
            res.insert(res.end() , t.begin(), t.end());
            v1 = vector<string>(t.begin(), t.end()) ;
            start+=2;
        }
        while (res[0].length() != n * 2) {
            res.erase(res.begin());
        }
        return res;
    }
};