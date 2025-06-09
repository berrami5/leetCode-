/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let arr = [1]
    for (let i = 1 ; i <= n ; i++) arr[i] = arr[i-1] * i
    let array = Array(n).fill(0).map((e,ind) => ind + 1)
    let res = ""
    while (array.length > 1) {
        let r = (arr[n] / arr[n-1]) < k ?Math.ceil(k/arr[n-1]) : 0
        k -= r
        r = r > 0 ? r - 1 : 0
        res += array[r]
        array.splice(r, 1)
        n--
    }
    return res
};
console.log(getPermutation(3,3));
console.log(getPermutation(4,5));
