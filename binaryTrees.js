// 1. binary tree level order traversal
// given a binary tree, return the level order traversal of its nodes values

// breadth first search going across
// queue -> first in first out 

function treeNode(val) {
    this.val - val;
    this.left = this.right = null;
}
var levelOrder = function(root) {
    if (!root) return [];
    const queue = [];
    const levels = [];
    while (queue.length) {
        let size = queue.length;
        const currentLevel = [];
        while(size--) {
            const item = queue.shift();
            currentLevel.push(item.val)
            if (item.left) queue.push(item.left);
            if (item.right) queue.push(item.right);

        }
        levels.push(currentLevel)
    }
    return levels;
};

// time complexity -> nested while loops O(n)
// space complexity -> O(k) -> O(n)

// 2. binary tree max depth 
// given a binary tree, find its maximum depth 
// the maximum depth is the number of nodes along the longest path from the root node
// down to the furthest leaf node 
// bfs -> queue -> first in first out
// dfs -> stack -> last in first out

var maxDepth = function(root) {
    if (!root) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// time complexity ->  O(n)
// space complexity -> call stack O(k) -> k is the height of our tree

// bfs
var maxDepth = function(root) {
    if (!root) return 0;
    const queue = [root];
    let depth = 0;
    while (queue.length > 0) {
        let size = queue.length;
        depth++;
        while(size--) {
            if (item.left) queue.push(item.left);
            if (item.right) queue.push(item.right);
        }
    }
 };

// time complexity ->  O(n)
// space complexity -> call stack O(n)

// 3. validate BST
var isValidBST = function(root, min=MIN_SAFE_INTEGER, max=MAX_SAFE_INTEGER){
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
    
};
// time complexity ->  O(n)
// space complexity -> 3 stack frames 3k -> O(n)

// 4. balanced binary search tree
// determine if it is height balanced 

var isBalanced = function(root) {
    if(!root) return true;
    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    const balanced = Math.abs(leftDepth - rightDepth) <= 1;
    return balanced && isBalanced(root.left) && isBalanced(root.right);
};

var getDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.max(getDepth(root.left), getDepth(root.right));
};

// time complexity ->  O(n)2
// space complexity -> stack frames -> O(n)

// sorting
// selection sort, insertion sort, and bubble sort take a long time 
// most optimal are merge sort, heap sort, and quick sort