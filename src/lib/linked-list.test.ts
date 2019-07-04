import { expect } from 'chai'

import { LinkedList } from './linked-list'

describe("Linked List", () => {

    const assertState = (list: LinkedList<any>) => {
        expect(!!(list.head && !list.tail)).to.be.false
        expect(!!(!list.head && list.tail)).to.be.false
        expect(list.size()).to.be.greaterThan(0)
    }

    const assertList = <V>(list: LinkedList<V>, arr: V[]) => {
        assertState(list)
        expect(list.toArray()).to.deep.eq(arr)
        expect(list.size()).to.eq(arr.length)
    }

    describe("addFirst", () => {
        it('1 element', () => {
            const list = new LinkedList<Number>()
            list.addFirst(1)
            expect(list.head).to.not.be.null
            expect(list.head == list.tail).to.be.true
            assertList(list, [1])
        })

        it('2 elements', () => {
            const list = new LinkedList<Number>()
            list.addFirst(1, 2)
            expect(list.head).to.not.be.null
            expect(list.head == list.tail).to.be.false
            assertList(list, [1, 2])
        })

        it('2 + 2 elements', () => {
            const list = new LinkedList<Number>()
            list.addFirst(3, 4)
            list.addFirst(1, 2)
            assertList(list, [1, 2, 3, 4])
        })
    })

    describe("addLast", () => {
        it('1 element', () => {
            const list = new LinkedList<Number>()
            list.addLast(1)
            expect(list.head).to.not.be.null
            expect(list.head == list.tail).to.be.true
            assertList(list, [1])
        })

        it('2 elements', () => {
            const list = new LinkedList<Number>()
            list.addLast(1, 2)
            expect(list.head).to.not.be.null
            expect(list.head == list.tail).to.be.false
            assertList(list, [1, 2])
        })

        it('2 + 2 elements', () => {
            const list = new LinkedList<Number>()
            list.addLast(1, 2)
            list.addLast(3, 4)
            assertList(list, [1, 2, 3, 4])
        })
    })

    describe("getFirst", () => {
        it('0 element', () => {
            const list = new LinkedList<Number>()
            expect(list.getFirst()).to.be.null
        })
        it('1 element', () => {
            const list = new LinkedList<Number>([1])
            expect(list.getFirst()).to.eq(1)
        })
        it('2 element', () => {
            const list = new LinkedList<Number>([1, 2])
            expect(list.getFirst()).to.eq(1)
        })
    })

    describe("getLast", () => {
        it('0 element', () => {
            const list = new LinkedList<Number>()
            expect(list.getLast()).to.be.null
        })
        it('1 element', () => {
            const list = new LinkedList<Number>([1])
            expect(list.getLast()).to.eq(1)
        })
        it('2 element', () => {
            const list = new LinkedList<Number>([1, 2])
            expect(list.getLast()).to.eq(2)
        })
    })

    describe("get", () => {
        it('0 element', () => {
            const list = new LinkedList<Number>()
            expect(list.get(0)).to.be.null
        })
        it('1 element', () => {
            const list = new LinkedList<Number>([1])
            expect(list.get(-1)).to.be.null
            expect(list.get(0)).to.eq(1)
            expect(list.get(1)).to.be.null
        })
        it('2 element', () => {
            const list = new LinkedList<Number>([1, 2])
            expect(list.get(-1)).to.be.null
            expect(list.get(0)).to.eq(1)
            expect(list.get(1)).to.eq(2)
            expect(list.get(2)).to.be.null
        })
    })

    describe("indexOf", () => {
        it('0 element', () => {
            const list = new LinkedList<Number>()
            expect(list.indexOf(0)).to.eq(-1)
        })
        it('1 element', () => {
            const list = new LinkedList<Number>([1])
            expect(list.indexOf(0)).to.eq(-1)
            expect(list.indexOf(1)).to.eq(0)
            expect(list.indexOf(2)).to.eq(-1)
        })
        it('2 element', () => {
            const list = new LinkedList<Number>([1, 2])
            expect(list.indexOf(0)).to.eq(-1)
            expect(list.indexOf(1)).to.eq(0)
            expect(list.indexOf(2)).to.eq(1)
            expect(list.indexOf(3)).to.eq(-1)
        })
    })

    describe("removeFirst", () => {
        it('0 element', () => {
            const list = new LinkedList<Number>()
            expect(list.removeFirst()).to.be.null
            expect(list.head).to.be.null
            expect(list.tail).to.be.null
        })
        it('1 element', () => {
            const list = new LinkedList<Number>([1])
            expect(list.removeFirst()).to.eq(1)
            expect(list.head).to.be.null
            expect(list.tail).to.be.null
            expect(list.size()).to.eq(0)
        })
        it('2 element', () => {
            const list = new LinkedList<Number>([1, 2])
            expect(list.removeFirst()).to.eq(1)
            expect(list.head).to.not.be.null
            if (list.head == null) return
            expect(list.head.value).to.eq(2)
            expect(list.head == list.tail).to.be.true
            assertList(list, [2])

            expect(list.removeFirst()).to.eq(2)
            expect(list.head).to.be.null
            expect(list.tail).to.be.null
        })
    })

    describe("removeLast", () => {
        it('0 element', () => {
            const list = new LinkedList<Number>()
            expect(list.removeLast()).to.be.null
            expect(list.head).to.be.null
            expect(list.tail).to.be.null
        })
        it('1 element', () => {
            const list = new LinkedList<Number>([1])
            expect(list.removeLast()).to.eq(1)
            expect(list.head).to.be.null
            expect(list.tail).to.be.null
            expect(list.size()).to.eq(0)
        })
        it('2 element', () => {
            const list = new LinkedList<Number>([1, 2])
            expect(list.removeLast()).to.eq(2)
            expect(list.head).to.not.be.null
            if (list.head == null) return
            expect(list.head.value).to.eq(1)
            expect(list.head == list.tail).to.be.true
            assertList(list, [1])

            expect(list.removeFirst()).to.eq(1)
            expect(list.head).to.be.null
            expect(list.tail).to.be.null
        })
    })

    describe("remove", () => {
        it('0 element', () => {
            const list = new LinkedList<Number>()
            expect(list.remove(-1)).to.be.null
            expect(list.remove(0)).to.be.null
            expect(list.head).to.be.null
            expect(list.tail).to.be.null
        })
        it('1 element', () => {
            const list = new LinkedList<Number>([1])
            expect(list.remove(0)).to.eq(1)
            expect(list.head).to.be.null
            expect(list.tail).to.be.null
            expect(list.size()).to.eq(0)
        })
        it('2 element - beginning', () => {
            const list = new LinkedList<Number>([1, 2])
            expect(list.remove(0)).to.eq(1)
            expect(list.head).to.not.be.null
            if (list.head == null) return
            expect(list.head.value).to.eq(2)
            expect(list.head == list.tail).to.be.true
            assertList(list, [2])

            expect(list.remove(2)).to.be.null
            assertList(list, [2])
        })
        it('2 element - end', () => {
            const list = new LinkedList<Number>([1, 2])
            expect(list.remove(list.size() - 1)).to.eq(2)
            expect(list.head).to.not.be.null
            if (list.head == null) return
            expect(list.head.value).to.eq(1)
            expect(list.head == list.tail).to.be.true
            assertList(list, [1])
        })
        it('3 element - middle', () => {
            const list = new LinkedList<Number>([1, 2, 3])
            expect(list.remove(1)).to.eq(2)
            expect(list.head).to.not.be.null
            expect(list.tail).to.not.be.null
            if (list.head == null || list.tail == null) return
            expect(list.head.value).to.eq(1)
            expect(list.tail.value).to.eq(3)
            assertList(list, [1, 3])
        })
    })
})