import { expect } from 'chai'

import { HashMap } from './hash-map'

describe("Hash Map", () => {
    it("get & set", () => {
        const map = new HashMap<number>()
        expect(map.get("a")).to.be.null
        map.set("a", 34)
        expect(map.get("a")).to.eq(34)

        map.set("b", 23)
        expect(map.get("a")).to.eq(34)
        expect(map.get("b")).to.eq(23)
        expect(map.get("abc")).to.be.null

        map.set("b", 100)
        expect(map.get("a")).to.eq(34)
        expect(map.get("b")).to.eq(100)

        map.set("ab", 200)
        expect(map.get("ab")).to.eq(200)
    })

    it("keys", () => {
        const map = new HashMap<number>()
        expect(map.keys().length).to.eq(0)

        map.set("a", 34)
        expect(map.keys()).to.have.members(["a"])

        map.set("a", 12)
        map.set("b", 23)
        expect(map.keys()).to.have.members(["a", "b"])
    })

    it("values", () => {
        const map = new HashMap<number>()
        expect(map.values().length).to.eq(0)

        map.set("a", 34)
        expect(map.values()).to.have.members([34])

        map.set("a", 12)
        map.set("b", 23)
        expect(map.values()).to.have.members([12, 23])
    })

    it("isEmpty", () => {
        const map = new HashMap<number>()
        expect(map.isEmpty()).to.be.true
        map.set("a", 34)
        expect(map.isEmpty()).to.be.false
    })

    it("clear", () => {
        const map = new HashMap()
        map.set("a", 34)
        map.clear()
        expect(map.size()).to.eq(0)
    })

    it("size", () => {
        const map = new HashMap()
        expect(map.size()).to.eq(0)
        map.set("a", 34)
        expect(map.size()).to.eq(1)
        map.set("a", 12)
        expect(map.size()).to.eq(1)
        map.set("b", 12)
        expect(map.size()).to.eq(2)
    })
})