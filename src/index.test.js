import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './index.js';

test('Capitalize chambers to Chambers', () => {
    expect(capitalize('chambers')).toBe('Chambers');
});

test('Reverse chambers to srebmahc', () => {
    expect(reverseString('chambers')).toBe('srebmahc');
});

test('Add 24 and 13 to be 37', () => {
    expect(calculator.add(24, 13)).toBe(37);
});

test('Subtract 13 from 24 to be 11', () => {
    expect(calculator.subtract(24, 13)).toBe(11);
});

test('Multiply 24 and 13 to be 312', () => {
    expect(calculator.multiply(24, 13)).toBe(312);
});

test('Divide 6 from 24 to be 4', () => {
    expect(calculator.divide(24, 6)).toBe(4);
});

test('Caesar Cipher (xyz, 3) to abc', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('Caesar Cipher (HeLLo, 3) to KhOOr', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('analyzeArray returns correct object', () => {
    const input = [1, 8, 3, 4, 2, 6];
    const expectedOutput = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    };

    expect(analyzeArray(input)).toEqual(expectedOutput);
})