// write an function to find the smallest element in an array 

let arr = [5, 10, 8, 17, 1,10, 78, 100];

function smallestNumber(arr) {
    let smallNum = Infinity;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < smallNum) {
            smallNum = arr[i];
        }
    }
    return smallNum;
}

let result = smallestNumber(arr);
console.log("smallest number in array =>",result)