import { GraphNode } from '../lib/graph'
import { LinkedList } from '../lib/linked-list'

interface Node {
    num: number
    isVisited?: boolean
}

export const bfs = (node: GraphNode<Node>, toSearch: Node): boolean => {
    if (!node) { return false }
    if (node.value == toSearch) { return true }
    const queue = new LinkedList<GraphNode<Node>>()
    node.value.isVisited = true
    queue.addLast(node)
    while (queue.size() != 0) {
        const node = queue.removeFirst()
        if (node) {
            for (let i = 0; i < node.adjacentNodes.length; i++) {
                const adjNode = node.adjacentNodes[i]
                if (adjNode.value == toSearch) { return true }
                if (!adjNode.value.isVisited) {
                    adjNode.value.isVisited = true
                    queue.addLast(adjNode)
                }
            }
        }
    }
    return false
}
