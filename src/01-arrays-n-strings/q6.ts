export const stringCompression = (str: string) => {
    if (!str || str.length <= 2) return str

    let index = 0
    let newStr = ""
    while (index < str.length) {
        const count = getCharCount(str, index)
        newStr = newStr + str.charAt(index) + count
        index += count
    }
    return newStr.length >= str.length ? str : newStr
}

const getCharCount = (str: string, index: number) => {
    if (index < 0 || index > str.length) { throw new Error(`Invalid index '${index}' for string '${str}' of length ${str.length}`) }
    const char = str.charAt(index)
    let count = 0
    while (str[index] == char) {
        ++index;
        ++count;
    }
    return count
}