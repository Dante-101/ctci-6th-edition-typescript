export const isOneAway = (str1: string, str2: string) => {
    if (Math.abs(str1.length - str2.length) > 1) return false
    if (str1.length == 0 || str2.length == 0) return true

    if (str1.length == str2.length) {
        let hadAberration = false
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] != str2[i]) {
                if (hadAberration) { return false }
                hadAberration = true
            }
        }
    } else {
        const longStr = str1.length > str2.length ? str1 : str2
        const shortStr = longStr == str1 ? str2 : str1

        let si = 0
        let hadAberration = false
        for (let li = 0; li < longStr.length; li++ , si++) {
            if (longStr[li] != shortStr[si]) {
                if (hadAberration) { return false }
                hadAberration = true
                ++li
            }
        }
    }
    return true
}