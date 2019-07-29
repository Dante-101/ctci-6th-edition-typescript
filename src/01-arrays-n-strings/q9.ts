export const isStringRotation = (mainStr: string, rotatedStr: string) => {
    if (mainStr.length != rotatedStr.length) return false
    if (mainStr.length == 0 && rotatedStr.length == 0) return true

    return isSubString(rotatedStr + rotatedStr, mainStr)
}

const isSubString = (mainStr: string, subStr: string) => {
    const split = mainStr.split(subStr)
    return split.length > 1
}