// write an function to find the largest element in an array 

let arr = [5, 10, 8, 17, 1, 10, 78, 100];
let largestNum = -Infinity;

function findLargest(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum;
}

let res = findLargest(arr);
console.log("largest number is=>", res)