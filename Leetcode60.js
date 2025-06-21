/**
URL:   https://leetcode.com/problems/permutation-sequence/description/
My Profile: https://leetcode.com/u/berrami/
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let res = ""
  let arr = Array(n).fill(0).map((e,ind) => ind + 1)
  let a = [1]
  for (let i = 1 ; i <= n;i++)a[i]=(a[i-1]*i)
  while (arr.length > 0) {
    let r = Math.ceil(k/a[n-1]) - 1
    k -= r*a[n-1]
    n--
    res += arr[r]
    arr.splice(r,1)
  }
  return res
};
