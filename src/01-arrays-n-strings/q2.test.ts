import { expect } from 'chai'

import { isPermutation } from './q2'

describe("01-q2", () => {
    it('valid permutations', () => {
        expect(isPermutation("", "")).to.be.true
        expect(isPermutation("a", "a")).to.be.true
        expect(isPermutation("ab", "ab")).to.be.true
        expect(isPermutation("ba", "ab")).to.be.true
        expect(isPermutation("aba", "aab")).to.be.true
        expect(isPermutation("abc", "abc")).to.be.true
        expect(isPermutation("aabbcc", "abcabc")).to.be.true
    })

    it('invalid permutations', () => {
        expect(isPermutation("a", "")).to.be.false
        expect(isPermutation("ab", "b")).to.be.false
        expect(isPermutation("b", "c")).to.be.false
        expect(isPermutation("a", "ab")).to.be.false
        expect(isPermutation("bc", "ab")).to.be.false
        expect(isPermutation("bbc", "cb")).to.be.false
        expect(isPermutation("bbc", "cbd")).to.be.false
    })
})