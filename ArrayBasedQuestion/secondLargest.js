// find the secondLargest Element in an array

let arr = [10,10];

function secondLargestElemtn(arr) {
    if (arr.length < 2) {
        return null;
    }
    let firstLargest = -Infinity
    let secondLargest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i]!=firstLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let res = secondLargestElemtn(arr);
console.log("second Largest==>",res);