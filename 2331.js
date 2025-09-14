// https://leetcode.com/problems/evaluate-boolean-binary-tree/description/?envType=problem-list-v2&envId=tree

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = undefined;
        this.right = undefined;
    }
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

//console.log(buildTree([1,null,2,3]));

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function(root) {
    function solve (node) {
        if (node.val == 0 || node.val == 1)return node 
        else {
            if (node.val == 3) return solve (node.left) && solve (node.right)
            else return solve (node.left) || solve (node.right)
        }
    }
    return solve (root).val == 1
}


console.log(evaluateTree( buildTree([2,1,3,null,null,0,1]) ))

// 2 => OR
// 3 => and
// 0 => false
// 1 => true