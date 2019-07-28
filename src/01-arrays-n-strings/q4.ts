import { isValidAsciiChar } from '../lib/utils'

export const isPalindromePermutation = (str: string) => {
    if (str.length == 0 || str.length == 1) return true

    const map = new Set<string>()
    let charLen = 0
    for (let i = 0; i < str.length; i++) {
        if (isValidAsciiChar(str[i])) {
            if (map.has(str[i])) { map.delete(str[i]) }
            else { map.add(str[i]) }
            ++charLen
        }
    }

    return map.size == (charLen % 2)
}

