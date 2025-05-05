import {capitalize, reverseString} from './index.js';

test('Capitalize chambers to Chambers', () => {
    expect(capitalize('chambers')).toBe('Chambers');
});

test('Reverse chambers to srebmahc', () => {
    expect(reverseString('chambers')).toBe('srebmahc');
})