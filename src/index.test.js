import {capitalize} from './index.js';

test('Capitalize chambers to Chambers', () => {
    expect(capitalize('chambers')).toBe('Chambers');
});