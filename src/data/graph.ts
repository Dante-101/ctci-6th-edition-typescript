import { GraphNode } from '../lib/graph'

interface Node {
    num: number
}

export const getTestGraphNodes = (n: number) => new Array(n).fill(0).map((v, i) => new GraphNode<Node>({ num: i }))