import { expect } from 'chai'

import { stringCompression } from './q6'

describe("01-q6", () => {
    it('stringCompression', () => {
        expect(stringCompression("")).to.eq("")
        expect(stringCompression("a")).to.eq("a")
        expect(stringCompression("a ")).to.eq("a ")
        expect(stringCompression("a  ")).to.eq("a  ")
        expect(stringCompression("a    ")).to.eq("a1 4")
        expect(stringCompression("abb")).to.eq("abb")
        expect(stringCompression("aabb")).to.eq("aabb")
        expect(stringCompression("aabbb")).to.eq("a2b3")
        expect(stringCompression("xaabbb")).to.eq("xaabbb")
        expect(stringCompression("xaaaabb")).to.eq("x1a4b2")

        expect(stringCompression("aabcccccaaa")).to.eq("a2b1c5a3")
    })
})