import {capitalize, reverseString, calculator} from './index.js';

test('Capitalize chambers to Chambers', () => {
    expect(capitalize('chambers')).toBe('Chambers');
});

test('Reverse chambers to srebmahc', () => {
    expect(reverseString('chambers')).toBe('srebmahc');
})

test('Add 24 and 13 to be 37', () => {
    expect(calculator.add(24, 13)).toBe(37);
})

test('Subtract 13 from 24 to be 11', () => {
    expect(calculator.subtract(24, 13)).toBe(11);
})