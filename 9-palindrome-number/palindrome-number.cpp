class Solution {
public:
    bool isPalindrome(int x) {
        if (x == 0)return 1;
        else if (x < 0)return 0;
        long int resivedX = 0;
        int testX = x;
        while (testX) {
            resivedX = (resivedX * 10) + testX % 10;
            testX /= 10;
        }
        
        return resivedX == x ;
    }
};