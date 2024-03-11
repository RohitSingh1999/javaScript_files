const arr = [3, 8, 2, 10, 5];
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("The largest number is:", largest);