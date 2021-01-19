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