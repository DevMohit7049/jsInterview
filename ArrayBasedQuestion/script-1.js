// write a funciton to find the count of nagarive number in an array  

let arr = [10, 6, -2, 0, 8, -3, 80, -50, -60, -100];
let count = 0;
function searchNagative(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

console.log("count of nagative is =>", searchNagative(arr));