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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (!root)return new TreeNode(val || null , null , null)
    let arr = [root]
    let i = 0
    while (i < arr.length) {
        let node = arr[i]
        if (!!node) {
            if (node.val > val)arr.push(node.left)
            else arr.push(node.right)
        }
        if (!arr[arr.length-1]) arr.pop()
        i++
    }
    let elm = arr[arr.length-1]
    
    if (elm.val > val)elm.left = new TreeNode(val,null,null)
    else elm.right = new TreeNode(val,null,null)
    return root
};