import { expect } from 'chai'

import { mergeSort } from './merge-sort'

describe("Sorting", () => {

    const runSort = (arr: number[], expectedArr: number[]) => {
        it("merge sort", () => {
            expect(mergeSort(arr)).to.deep.eq(expectedArr)
        })
    }

    describe('only one element', () => {
        runSort([1], [1])
    })

    describe('two elements', () => {
        describe("sorted", () => {
            runSort([1, 2], [1, 2])
        })
        describe("unsorted", () => {
            runSort([2, 1], [1, 2])
        })
    })

    describe('three elements', () => {
        describe("sorted", () => {
            runSort([10, 20, 30], [10, 20, 30])
        })
        describe("unsorted", () => {
            runSort([30, 10, 20], [10, 20, 30])
        })
    })

    describe('10 elements', () => {
        describe("sorted", () => {
            const arr = new Array(10).fill(0).map(v => Math.floor(Math.random() * 1e7))
            arr.sort((x, y) => x - y)
            runSort(arr, arr)
        })
        describe("unsorted", () => {
            const arr = new Array(10).fill(0).map(v => Math.floor(Math.random() * 1e7))
            const sortedArr = [...arr].sort((x, y) => x - y)
            runSort(arr, sortedArr)
        })
    })
})