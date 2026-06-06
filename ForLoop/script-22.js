// write an funciton that search for an element if the element is found it return the index of that array 

let arr = [10, 6, 2, 0, 8, 3, 80];
function searchElement(n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) { 
            return i;
        }
    }
    return -1
}

console.log("element are = >", searchElement(80));




