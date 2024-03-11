const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
const uniqueArray = [];

for (let i = 0; i < arrayWithDuplicates.length; i++) {
    if (uniqueArray.indexOf(arrayWithDuplicates[i]) === -1) {
        uniqueArray.push(arrayWithDuplicates[i]);
    }
}

console.log("Array with duplicates:", arrayWithDuplicates);
console.log("Array after removing duplicates:", uniqueArray);
