class Solution {
public:
    int divide(long int dividend,long int divisor) {
        long int res= dividend / divisor;
        if (res > INT32_MAX)return INT32_MAX;
        if (res < INT32_MIN)return INT32_MIN;
        return res;
    }
};