/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(n) {
    let res = 0

  while (n != 0) {

    res = res * 10 + n % 10

    n = ~~(n / 10)

  }

  return res > 2**31 - 1 ? 0 : res < -1*2**31 ? 0 : res
};