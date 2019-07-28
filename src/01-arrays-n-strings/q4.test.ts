import { expect } from 'chai'

import { isPalindromePermutation } from './q4'

describe("01-q4", () => {
    it('valid palindrome permutation', () => {
        expect(isPalindromePermutation("")).to.be.true
        expect(isPalindromePermutation("+")).to.be.true
        expect(isPalindromePermutation(" ")).to.be.true
        expect(isPalindromePermutation("=a")).to.be.true
        expect(isPalindromePermutation("a")).to.be.true
        expect(isPalindromePermutation("aa")).to.be.true
        expect(isPalindromePermutation("aaa")).to.be.true
        expect(isPalindromePermutation("aab")).to.be.true
        expect(isPalindromePermutation("aabb")).to.be.true
        expect(isPalindromePermutation("aab b")).to.be.true
        expect(isPalindromePermutation("aabbb")).to.be.true
        expect(isPalindromePermutation("aa bb b")).to.be.true
        expect(isPalindromePermutation("aabbbcc")).to.be.true
        expect(isPalindromePermutation("a a bb b cc ")).to.be.true
        expect(isPalindromePermutation("a a2bb+b-cc0")).to.be.true
    })
    
    it('invalid palindrome permutation', () => {
        expect(isPalindromePermutation("ab")).to.be.false
        expect(isPalindromePermutation("abc")).to.be.false
        expect(isPalindromePermutation("abcc")).to.be.false
        expect(isPalindromePermutation("aabbbcdc")).to.be.false
        expect(isPalindromePermutation("aabbbccc")).to.be.false
    })
})