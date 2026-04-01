class Solution {
public:
    int romanToInt(string s) {
        unordered_map<char, int> obj;
        obj['I'] = 1;obj['V']=5;obj['X']=10;obj['L']=50;obj['C']=100;obj['D']=500;obj['M']=1000;
        s += "I";
        int i = 0;
        int res = 0;
        while (s[i+1] != '\0') {
            if (obj[s[i]] >= obj[s[i+1]])res += obj[s[i]];
            else {res += obj[s[i+1]] - obj[s[i]];i++;}
            i++;
        }
        return res;
    }
};