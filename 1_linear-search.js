const arr = [22, 1, 2, 35, 8, 43, 16, 51, 83];
let counter = 0;

function linearSearch(array, item) {
    for (let i = 0; i < arr.length; i++) {
        counter += 1;
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr, 43));
console.log(`Count: ${counter}`); // Max - 9

// Complexity O(n)
