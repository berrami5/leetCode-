function TreeNode(val , left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
}

function buildTree(arr) {
    if (!arr.length || arr[0] === null) return null

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (queue.length && i < arr.length) {
        let node = queue.shift();

        if (arr[i] !== null && arr[i] !== undefined) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }

    return root;
}


var increasingBST = function(root) {
    let node = new TreeNode(null)
    let res = [node]
    function solve (node) {
        if (!node)return null
        solve (node.left)
        res.push(new TreeNode (node.val))
        solve (node.right)
    }
    solve (root)
    for (let i = res.length - 1 ; i > 0 ; i--) res[i-1].right = res[i]
    return node.right
}
console.log(increasingBST(buildTree([5,3,6,2,4,null,8,1,null,null,null,7,9])));
