export function capitalize(string) {
    if (string === '') return string;
    return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
    if (string === '') return string;
    return string[string.length - 1] + reverseString(string.slice(0, string.length -1));
}

export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

export function caesarCipher(string, shift) {
    const UPPERCASE_BOUNDARY = 65;
    const LOWERCASE_BOUNDARY = 97;
    
    if (shift === 0) return string;
    else return string.split('').map(char => {
        if (char >= 'A' && char <= 'Z') return shiftChar(char, UPPERCASE_BOUNDARY, shift);
        if (char >= 'a' && char <= 'z') return shiftChar(char, LOWERCASE_BOUNDARY, shift);
        return char;
    }).join('');
}

const shiftChar = (char, boundary, shift) => {
    const ALPHABET_SIZE = 26;
    const code = char.charCodeAt(0);
    return String.fromCharCode(((code - boundary + shift) 
    % ALPHABET_SIZE + ALPHABET_SIZE) % ALPHABET_SIZE + boundary);
};