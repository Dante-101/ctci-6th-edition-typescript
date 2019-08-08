import { expect } from 'chai'

import { getTestGraphNodes } from '../data/graph'
import { bfs } from './breadth-first-search'
import { dfs } from './depth-first-search'

describe("graph search", () => {

    describe('only one node', () => {
        const getNodes = () => getTestGraphNodes(1)

        it("breadth first search", () => {
            const nodes = getNodes()
            expect(bfs(nodes[0], nodes[0].value)).to.be.true
        })

        it("depth first search", () => {
            const nodes = getNodes()
            expect(dfs(nodes[0], nodes[0].value)).to.be.true
        })
    })

    describe('circular one node', () => {
        const getNodes = () => {
            const nodes = getTestGraphNodes(1)
            nodes[0].adjacentNodes.push(nodes[0])
            return nodes
        }

        it("breadth first search", () => {
            const nodes = getNodes()
            expect(bfs(nodes[0], nodes[0].value)).to.be.true
        })

        it("depth first search", () => {
            const nodes = getNodes()
            expect(dfs(nodes[0], nodes[0].value)).to.be.true
        })
    })

    describe('tree', () => {
        const getNodes = () => {
            const nodes = getTestGraphNodes(10)
            nodes[1].adjacentNodes.push(nodes[2], nodes[3])
            nodes[2].adjacentNodes.push(nodes[4], nodes[5])
            nodes[3].adjacentNodes.push(nodes[6], nodes[7])
            nodes[4].adjacentNodes.push(nodes[8], nodes[9])
            return nodes
        }

        it("breadth first search", () => {
            const nodes1 = getNodes()
            expect(bfs(nodes1[1], nodes1[9].value)).to.be.true
            const nodes2 = getNodes()
            expect(bfs(nodes2[1], nodes2[0].value)).to.be.false
        })

        it("depth first search", () => {
            const nodes1 = getNodes()
            expect(dfs(nodes1[1], nodes1[9].value)).to.be.true
            const nodes2 = getNodes()
            expect(dfs(nodes2[1], nodes2[0].value)).to.be.false
        })
    })

    describe('circular graph', () => {
        const getNodes = () => {
            const nodes = getTestGraphNodes(4)
            nodes[0].adjacentNodes.push(nodes[1])
            nodes[1].adjacentNodes.push(nodes[2])
            nodes[2].adjacentNodes.push(nodes[0])
            return nodes
        }
        
        it("breadth first search", () => {
            const nodes1 = getNodes()
            expect(bfs(nodes1[1], nodes1[0].value)).to.be.true
            const nodes2 = getNodes()
            expect(bfs(nodes2[1], nodes2[3].value)).to.be.false
        })

        it("depth first search", () => {
            const nodes1 = getNodes()
            expect(dfs(nodes1[1], nodes1[0].value)).to.be.true
            const nodes2 = getNodes()
            expect(dfs(nodes2[1], nodes2[3].value)).to.be.false
        })
    })
})