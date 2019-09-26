export class GraphNode<V> {
    constructor(public value: V,
        public adjacentNodes: GraphNode<V>[] = []) { }
}