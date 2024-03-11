function isSortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // If any element is greater than the next one, array is not sorted
        }
    }
    return true; // If loop completes without returning false, array is sorted
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [1, 3, 2, 4, 5];

console.log("Is sortedArray sorted in ascending order?", isSortedAscending(sortedArray));
console.log("Is unsortedArray sorted in ascending order?", isSortedAscending(unsortedArray));
