const binarySearch = require('./binary-search');
const myList = [1, 3, 5, 7, 9, 11, 22, 31, 54, 65, 82, 111];

describe('binarySearch tests', () => {
    test('correct input', () => {
        expect(binarySearch(myList, 1)).toBe(0);
        expect(binarySearch(myList, 5)).toBe(2);
        expect(binarySearch(myList,  11)).toBe(5);
        expect(binarySearch(myList,  65)).toBe(9);
        expect(binarySearch(myList,  111)).toBe(11);
    })
    test('incorrect input', () => {
        expect(binarySearch(myList, 0)).toBe(-1);
        expect(binarySearch(myList, 2)).toBe(-1);
        expect(binarySearch(myList, 23)).toBe(-1);
        expect(binarySearch(myList, 112)).toBe(-1);
    })
})
