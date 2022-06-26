let counter = 0;
const myList = [1, 3, 5, 7, 9, 11, 22, 31, 54, 65, 82, 111];

function binarySearch(arr, item) {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while (left <= right) {
        counter += 1;
        mid = Math.round((right-left) / 2) + left;

        if (item ===  arr[mid]) {
            return mid;
        } else if (item < arr[mid] ) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch(myList, 2));
console.log(`Count: ${counter}`); // Max - 4

// Complexity - O(log n)

module.exports = binarySearch;
