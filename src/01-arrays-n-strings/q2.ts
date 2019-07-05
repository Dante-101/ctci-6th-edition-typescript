export const isPermutation = (str1: string, str2: string) => {
    if (str1.length != str2.length) { return false }
    
    const map = new Map<string, number>()
    str1.split("").forEach(c => {
        const count = map.get(c) || 0
        map.set(c, count + 1)
    })

    for (let i = 0; i < str2.length; i++) {
        const c = str2.charAt(i)
        const count = map.get(c)
        if (count == null) { return false }
        if (count == 1) {
            map.delete(c)
        } else {
            map.set(c, count - 1)
        }
    }

    return map.size == 0
}