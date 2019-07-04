type LinkedListEntryRef<V> = LinkedListEntry<V> | null

export class LinkedListEntry<V> {
    constructor(public value: V,
        public next: LinkedListEntryRef<V> = null,
        public prev: LinkedListEntryRef<V> = null) {
    }
}

export class LinkedList<V> {
    public head: LinkedListEntryRef<V>
    public tail: LinkedListEntryRef<V>
    private _size: number

    constructor() {
        this.head = null
        this.tail = null
        this._size = 0
    }

    addFirst(...values: V[]) {
        for (let i = values.length - 1; i >= 0; i--) {
            const newEntry = new LinkedListEntry(values[i])
            if (this.head == null) {
                if (this.tail == null) {
                    this.head = this.tail = newEntry
                }
            } else {
                newEntry.next = this.head
                this.head.prev = newEntry
                this.head = newEntry
            }
            ++this._size
        }
    }

    addLast(...values: V[]) {
        values.forEach(value => {
            const newEntry = new LinkedListEntry(value)
            if (this.tail == null) {
                if (this.head == null) {
                    this.head = this.tail = newEntry
                }
            } else {
                newEntry.prev = this.tail
                this.tail.next = newEntry
                this.tail = newEntry
            }
            ++this._size
        })
    }

    removeFirst(): V | null {
        if (!this.head) return null
        const entry = this.head
        if (this.head.next) {
            this.head.next.prev = null
            this.head = this.head.next
        } else {
            this.head = this.tail = null
        }
        --this._size
        return entry.value
    }

    removeLast(): V | null {
        if (!this.tail) return null
        const entry = this.tail
        if (this.tail.prev) {
            this.tail.prev.next = null
            this.tail = this.tail.prev
        } else {
            this.head = this.tail = null
        }
        --this._size
        return entry.value
    }

    remove(index: number): V | null {
        const entry = this.getEntry(index)
        if (!entry) return null
        if (this.head == this.tail && this.head == entry) {
            this.head = this.tail = null
            return entry.value
        } else if (this.head == entry) {
            return this.removeFirst()
        } else if (this.tail == entry) {
            return this.removeLast()
        } else {
            if (entry.prev) {
                entry.prev.next = entry.next
            }
            if (entry.next) {
                entry.next.prev = entry.prev
            }
            --this._size
            return entry.value
        }
    }

    getFirst(): V | null {
        return this.get(0)
    }

    getLast(): V | null {
        return this.get(this._size)
    }

    get(index: number): V | null {
        const entry = this.getEntry(index)
        return entry ? entry.value : null
    }

    private getEntry(index: number): LinkedListEntryRef<V> {
        if (this.head == null || this._size - 1 < index) return null
        let i = 0
        let entry = this.head
        while (i < index) {
            if (entry.next) {
                entry = entry.next
                ++i
            } else {
                return null
            }
        }
        return entry
    }

    indexOf(value: V): number {
        let entry: LinkedListEntryRef<V> = this.head
        let index = 0
        while (entry) {
            if (entry.value == value) { return index }
            ++index
            entry = entry.next
        }
        return -1
    }

    toArray(): V[] {
        const arr: V[] = []
        let entry = this.head
        while (entry) {
            arr.push(entry.value)
            entry = entry.next
        }
        return arr
    }

    size(): number {
        return this._size
    }
}