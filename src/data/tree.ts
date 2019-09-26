import { TreeNode } from '../lib/tree'

interface Node {
    num: number
}

export const getTreeNode = (n: number) => new Array(n).fill(0).map((v, i) => new TreeNode<Node>({ num: i }))