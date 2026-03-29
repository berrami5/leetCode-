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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root)return []
    let arr = [root]
    let res = []
    let i = 0 
    let lvl = [1]
    while (i < arr.length) {
        let node = arr[i]
        if (!node)null
        else {
            if (node.val == null)null
            else {
                if (node.left) {
                    arr.push(node.left)
                    lvl.push(lvl[i] + 1)
                }
                if (node.right) {
                    arr.push(node.right)
                    lvl.push(lvl[i] + 1)
                }
            }
        }
        i++
    }
    for (let i = 0 ; i < arr.length ; i++) {
        if (lvl[i] == lvl[i-1]) {
            res[res.length-1].push(arr[i].val)
        }else {
            res.push([arr[i].val])
        }
    }
    return res
};