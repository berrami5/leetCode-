bool isPalindrome(int x) {
    if (x == 0)return 1;
        long int resivedX = 0;
        int testX = x;
        while (testX) {
            resivedX *= 10;
            resivedX += testX % 10;
            testX /= 10;
        }
        
        return resivedX == x && x > 0;
}