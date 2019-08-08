import { GraphNode } from '../lib/graph'

interface Node {
    num: number
    isVisited?: boolean
}

export const dfs = (node: GraphNode<Node>, toSearch: Node): boolean => {
    node.value.isVisited = true
    if (node.value == toSearch) { return true }
    if (node.adjacentNodes.length == 0) return false
    return node.adjacentNodes.some(adjNode => {
        if (adjNode.value.isVisited) { return false }
        return dfs(adjNode, toSearch)
    })
}