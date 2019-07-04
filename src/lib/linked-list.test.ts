import { expect } from 'chai'

import { LinkedList } from './linked-list'

describe("Linked List", () => {

    const assertState = (list: LinkedList<any>) => {
        if ((list.head && !list.tail) || (!list.head && list.tail)) {
            throw new Error("Either one of head or tail cannot be null")
        }
        if (list.size() < 0) {
            throw new Error("Size cannot be less than zero")
        }
    }

    const assertList = <V>(list: LinkedList<V>, arr: V[]) => {
        assertState(list)
        expect(list.toArray()).to.deep.eq(arr)
    }

    describe("addFirst", () => {
        it('add 1 element', () => {
            const list = new LinkedList<Number>()
            list.addFirst(1)
            assertList(list, [1])
        })

        it('add 2 elements', () => {
            const list = new LinkedList<Number>()
            list.addFirst(1, 2)
            assertList(list, [1, 2])
        })

        it('add 2 + 2 elements', () => {
            const list = new LinkedList<Number>()
            list.addFirst(3, 4)
            list.addFirst(1, 2)
            assertList(list, [1, 2, 3, 4])
        })
    })

    describe("addLast", () => {
    })

    describe("getFirst", () => {

    })
    describe("getLast", () => {

    })
    describe("get", () => {

    })
    describe("indexOf", () => {

    })
    describe("removeFirst", () => {

    })
    describe("removeLast", () => {

    })
    describe("remove", () => {

    })

    describe("size", () => {

    })

    describe("toArray", () => {

    })
})