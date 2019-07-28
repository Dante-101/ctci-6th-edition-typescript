import { expect } from 'chai'

import { isValidAsciiChar } from './utils'

describe("Utils", () => {
    it('isValidAsciiChar', () => {
        expect(isValidAsciiChar("a")).to.be.true
        expect(isValidAsciiChar("d")).to.be.true
        expect(isValidAsciiChar("z")).to.be.true
        expect(isValidAsciiChar("A")).to.be.true
        expect(isValidAsciiChar("D")).to.be.true
        expect(isValidAsciiChar("Z")).to.be.true
        
        expect(isValidAsciiChar("+")).to.be.false
        expect(isValidAsciiChar("-")).to.be.false
        expect(isValidAsciiChar(" ")).to.be.false
    })
})