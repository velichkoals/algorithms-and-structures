const myList = [1, 3, 5, 7, 9, 11, 22, 31, 54, 65, 82, 111];
let counter = 0;
function binarySearch(arr, item) {
    let first = 0;
    let last = arr.length;

    while (first <= last) {
        counter += 1;
        let middle = Math.floor((first + last) / 2);
        let guess = arr[middle];

        if (guess === item) {
            return middle;
        } else if (guess > item) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }
    return null;
}

console.log(binarySearch(myList, 7));
console.log(`Count: ${counter}`); // Max - 4

// Complexity - O(log2 N)  -  (log2 12 - 3,58)    12 - amount of elements in arr.

