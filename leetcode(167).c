#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int* twoSum(int* numbers, int numbersSize, int target, int* returnSize) {
    *returnSize = 2;
    int* res = (int*)malloc(2*sizeof(int));
    int start = 0; 
    int end = numbersSize - 1;
    int sum;
    while (start < end) {
        sum = numbers[start] + numbers[end];
        if (sum == target) {
            res[0] = start; res[1] = end;break;
        }else if (sum > target)end--;
        else start++;
    }
    return res;
}

int main () {
    int nums[] = {2,7,11,15};
    int* arr = nums;
    int two = 2;
    int* size = &two;
    int* fct = twoSum(arr , 4 , 9 , size);
    printf("%d\n%d" ,fct[0], fct[1]);
    return 0;
}