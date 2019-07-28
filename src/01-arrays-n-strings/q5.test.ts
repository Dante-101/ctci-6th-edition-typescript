import { expect } from 'chai'

import { isOneAway } from './q5'

describe("01-q5", () => {
    it('valid one away', () => {
        expect(isOneAway("", "")).to.be.true
        expect(isOneAway("", "b")).to.be.true
        expect(isOneAway("a", "b")).to.be.true
        expect(isOneAway("ac", "b")).to.be.true
        expect(isOneAway("ac", "bc")).to.be.true
        expect(isOneAway("c", "bc")).to.be.true

        expect(isOneAway("pale", "ple")).to.be.true
        expect(isOneAway("pales", "pale")).to.be.true
        expect(isOneAway("pale", "bale")).to.be.true
        expect(isOneAway("palest", "pales")).to.be.true
    })
    
    it('invalid one away', () => {
        expect(isOneAway("", "  ")).to.be.false
        expect(isOneAway("ac", "bd")).to.be.false
        expect(isOneAway("acd", "b")).to.be.false
        expect(isOneAway("pale", "bake")).to.be.false
        expect(isOneAway("palest", "pale")).to.be.false
        expect(isOneAway("palest", "lest")).to.be.false
        expect(isOneAway("palest", "ales")).to.be.false
    })
})