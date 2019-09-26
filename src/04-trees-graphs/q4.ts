import { TreeNode } from "../lib/tree";

export const checkBalanced = (root: TreeNode<any>): boolean => {
    const height = getHeight(root)
    return height == -1
}

const getHeight = (root?: TreeNode<any>): number => {
    if (!root) return 0
    const leftHeight = getHeight(root.left)
    if (leftHeight == -1) return -1
    const rightHeight = getHeight(root.right)
    if (rightHeight == -1) return -1
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1
    }
    return Math.max(leftHeight, rightHeight) + 1
}