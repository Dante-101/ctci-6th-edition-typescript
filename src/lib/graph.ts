export class GraphNode<V> {
    constructor(public value: V,
        public adjacentNodes: GraphNode<V>[] = []) { }
}

// export class Graph<V> {
//     constructor(public nodes: GraphNode<V>[]) { }
// }