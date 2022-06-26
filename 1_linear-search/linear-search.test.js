const linearSearch = require('./linear-search');
const arr = [22, 1, 2, 35, 8, 43, 16, 51, 83];

describe('linearSearch tests', () => {

    test('correct input', () => {
        expect(linearSearch(arr, 1)).toBe(1);
        expect(linearSearch(arr, 2)).toBe(2);
        expect(linearSearch(arr, 22)).toBe(0);
        expect(linearSearch(arr, 43)).toBe(5);
        expect(linearSearch(arr, 83)).toBe(8);
    })
    test('incorrect input', () => {
        expect(linearSearch(arr, 0)).toBe(-1);
        expect(linearSearch(arr, 3)).toBe(-1);
        expect(linearSearch(arr, 45)).toBe(-1);
        expect(linearSearch(arr, 84)).toBe(-1);
    })
})
