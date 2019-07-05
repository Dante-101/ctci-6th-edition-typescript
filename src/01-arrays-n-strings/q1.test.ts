import { expect } from 'chai'

import { areCharsUnique } from './q1'

describe("01-q1", () => {
    const check = (func: (s: string) => boolean) => {
        expect(func("")).to.be.true
        expect(func("a")).to.be.true
        expect(func("ab")).to.be.true
        expect(func("aba")).to.be.false
        expect(func("aa")).to.be.false
    }

    it('with DS', () => {
        const { withDS } = areCharsUnique
        check(withDS)
    })

    it('without DS', () => {
        const { withoutDS } = areCharsUnique
        check(withoutDS)
    })


})