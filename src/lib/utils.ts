export const isValidAsciiChar = (char: string) => {
    if (!char || char.length != 1) return false
    const code = char.charCodeAt(0)
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
}