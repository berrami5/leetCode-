class Solution {
public:
    int myAtoi(string s) {
        long int max = INT_MAX;
        long int min = INT_MIN;
        int n = s.length();
        int i = 0; 
        long long int res = 0;
        int sign = 1;
        while (s[i] == ' ') {
            i++;
        }
        if (n == i)return res;
        sign = s[i] == '-' ? -1 : 1;
        if (s[i] == '-' || s[i] == '+')i++;
        while (i < n && s[i] <= '9' && s[i] >= '0') {
            res*= 10; res += s[i] - '0';
            if (res * sign > 0 && res >= max)return max;
            else if (res * sign < 0 && res*sign <= min)return min; 
            i++;
        }
        return res*sign;
    }
};