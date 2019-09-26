import { TreeNode } from '../lib/tree'

export const createBinaryTreeFromSortedArr = (arr: number[]): TreeNode<number> | null => {
    if (arr.length == 0) { return null }
    if (arr.length == 1) {
        return new TreeNode(arr[0])
    }
    const mid = Math.floor(arr.length - 1 / 2)
    const root = new TreeNode(arr[mid])
    const leftTree = createBinaryTreeFromSortedArr(arr.slice(0, mid))
    if (leftTree) { root.left = leftTree }
    const rightTree = createBinaryTreeFromSortedArr(arr.slice(mid + 1, arr.length))
    if (rightTree) {
        root.right = rightTree
    }
    return root
}