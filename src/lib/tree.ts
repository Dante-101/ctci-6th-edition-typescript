export class TreeNode<V> {
    constructor(public value: V,
        public left?: TreeNode<V>,
        public right?: TreeNode<V>) { }
}