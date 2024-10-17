// 102. Binary Tree Level Order Traversal



// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).









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
    let result = [];
    if (root === null) return result;

    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length
        let currentLevel = []

        for(let i = 0; i < levelSize; i++){

            let currentNode = queue.shift()
            currentLevel.push(currentNode.val)

            if(currentNode.left !== null) queue.push(currentNode.left)
            if(currentNode.right !== null) queue.push(currentNode.right)
        }

        result.push(currentLevel)
    }

    return result;
};