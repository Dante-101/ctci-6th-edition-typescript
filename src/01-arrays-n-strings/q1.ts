export const areCharsUnique = {
    withDS: (s: string) => {
        if (!s) return true
        const set = new Set<string>()
        for (let i = 0; i < s.length; i++) {
            const char = s.charAt(i)
            if (set.has(char)) return false
            else set.add(char)
        }
        return true
    },

    withoutDS: (s: string) => {
        if (!s) return true
        for (let i = 0; i < s.length; i++) {
            const char = s.charAt(i)
            for (let j = i + 1; j < s.length; j++) {
                if (s.charAt(j) == char) { return false }
            }
        }
        return true
    }
}