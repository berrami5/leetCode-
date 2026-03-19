/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
    let n = Math.floor(Math.log2(label)) 
    console.log(n);
    
    let m = label
    let arr = []
    while (n > 0) {
        let equation = Math.ceil(2**n - m/2 - 1 + 2**(n-1))
        arr.unshift(equation)
        m = equation
        n--
    }
    return arr.concat(label)
};