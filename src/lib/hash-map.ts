import { LinkedList } from './linked-list'

class HashMapNode<V> {
    constructor(public key: string, public value: V) { }
}

export class HashMap<V> {
    private indexArr: Array<LinkedList<HashMapNode<V>>>

    constructor(private approxSize: number = 16) {
        this.indexArr = new Array(this.approxSize * 2)
    }

    private arrIndex(key: string): number {
        const sum = key.split("").reduce((sum, c) => sum + c.charCodeAt(0), 0)
        return sum % this.indexArr.length
    }

    set(key: string, value: V) {
        const index = this.arrIndex(key)
        if (!this.indexArr[index]) { this.indexArr[index] = new LinkedList() }
        const list = this.indexArr[index]
        let entry = list.head
        while (entry) {
            if (entry.value.key == key) {
                entry.value.value = value
                return
            }
            entry = entry.next
        }
        list.addLast(new HashMapNode(key, value))
    }

    get(key: string): V | null {
        const index = this.arrIndex(key)
        const list = this.indexArr[index]
        if (!list) { return null }

        let entry = list.head
        while (entry) {
            if (entry.value.key == key) {
                return entry.value.value
            }
            entry = entry.next
        }
        return null
    }

    keys(): string[] {
        const keys: string[] = []
        this.indexArr.forEach(list => {
            let entry = list.head
            while (entry) {
                keys.push(entry.value.key)
                entry = entry.next
            }
        })
        return keys
    }

    values(): V[] {
        const values: V[] = []
        this.indexArr.forEach(list => {
            let entry = list.head
            while (entry) {
                values.push(entry.value.value)
                entry = entry.next
            }
        })
        return values
    }

    isEmpty() {
        return this.size() == 0
    }

    clear() {
        this.indexArr = new Array(this.approxSize * 2)
    }

    size() {
        return this.indexArr.reduce((sum, list) => sum + list.size(), 0)
    }
}