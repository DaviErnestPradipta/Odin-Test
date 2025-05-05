export function capitalize(string) {
    if (string === '') return string;
    return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
    if (string === '') return string;
    return string[string.length - 1] + reverseString(string.slice(0, string.length -1));
}