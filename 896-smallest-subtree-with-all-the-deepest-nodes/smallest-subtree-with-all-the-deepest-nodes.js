/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    let arr = []
    function deph (node) {
        if (!node)return 0; 
        let left = deph(node.left)
        let right = deph(node.right)
        return 1 + Math.max(left,right)
    }
    function helper (node , lvl = 0) {
        if (!node)return null 
        if (deph(node.left) == deph(node.right))arr.push([node , lvl , deph(node.left)])
        helper(node.left , lvl+1)
        helper(node.right , lvl+1)
        return arr
    } 
    helper(root)
    let pos = 0
    for (let i = 1 ; i < arr.length ; i++) {
        if (arr[i][1] + arr[i][2] > arr[pos][1] + arr[pos][2]) {
            pos = i
        }else if (arr[i][1] + arr[i][2] == arr[pos][1] + arr[pos][2]) {
            pos = arr[i][2] > arr[pos][2] ? i : pos
        }
    }
    return arr[pos][0]
};