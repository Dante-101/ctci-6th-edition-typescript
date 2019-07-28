export const urlify = (input: string, actualLen: number) => {
    if (!input || actualLen <= 0) return ""

    const charArr = input.split("")
    const spaceCount = countSpace(charArr, actualLen)
    const finalLen = actualLen + spaceCount * 2
    if (finalLen > charArr.length) { throw new Error('Invalid input or actual length') }
    
    let j = finalLen - 1
    for (let i = actualLen - 1; i >= 0; i--) {
        if (charArr[i] == " ") {
            charArr[j] = "0"
            charArr[j - 1] = "2"
            charArr[j - 2] = "%"
            j = j - 3
        } else {
            charArr[j] = charArr[i]
            --j
        }
    }
    return charArr.join("").slice(0, finalLen)
}

const countSpace = (charArr: string[], len: number) => {
    let spaceCount = 0
    for (let i = 0; i < len; i++) {
        const c = charArr[i]
        if (c == " ") { ++spaceCount }
    }
    return spaceCount
}