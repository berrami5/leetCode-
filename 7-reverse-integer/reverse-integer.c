int reverse(int x){
    long int res = 0;
        while (x != 0) {
            res *= 10;
            res += x % 10 ;
            x/=  10;
            
        }
        return res > INT32_MAX ? 0 : (res < INT32_MIN ? 0 : res);
}