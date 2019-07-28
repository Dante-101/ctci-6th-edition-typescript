import { expect } from 'chai'

import { urlify } from './q3'

describe("01-q3", () => {
    it('urlify', () => {
        expect(urlify("", -2)).to.eq("")

        expect(urlify("", 0)).to.eq("")
        expect(urlify(" ", 0)).to.eq("")

        expect(urlify("   ", 1)).to.eq("%20")
        expect(urlify("a", 1)).to.eq("a")
        expect(urlify("a ", 1)).to.eq("a")

        expect(urlify("      ", 2)).to.eq("%20%20")
        expect(urlify("a   ", 2)).to.eq("a%20")
        expect(urlify(" a  ", 2)).to.eq("%20a")
        expect(urlify("ab  ", 2)).to.eq("ab")

        expect(urlify("a b  ", 3)).to.eq("a%20b")
        expect(urlify(" ab  ", 3)).to.eq("%20ab")

        expect(urlify("a  b    ", 4)).to.eq("a%20%20b")
        expect(urlify(" a b    ", 4)).to.eq("%20a%20b")
    })
})