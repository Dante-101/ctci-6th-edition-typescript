import { expect } from 'chai'

import { isStringRotation } from './q9'

describe("01-q9", () => {
    it('valid stringRotation', () => {
        expect(isStringRotation("", "")).to.be.true
        expect(isStringRotation("a", "a")).to.be.true
        expect(isStringRotation("ab", "ba")).to.be.true
        expect(isStringRotation("abc", "bca")).to.be.true
        expect(isStringRotation("abcd", "abcd")).to.be.true
        expect(isStringRotation("abcd", "cdab")).to.be.true
        expect(isStringRotation("waterbottle", "erbottlewat")).to.be.true
    })

    it('invalid stringRotation', () => {
        expect(isStringRotation("", "a")).to.be.false
        expect(isStringRotation("b", "a")).to.be.false
        expect(isStringRotation("ba", "bc")).to.be.false
        expect(isStringRotation("abcd", "dbac")).to.be.false
    })
})