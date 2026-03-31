class Solution {
public:
    bool isPalindrome(int x) {
        string str = to_string(x);
        int i = 0;
        const int length = str.length() - 1; 
        while (i  < length - i) {
            if (str[i] != str[length - i]) {
                return 0;
            }
            i++;
        }
        return 1;
    }
};