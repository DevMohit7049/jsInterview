// // JavaScript Array toString() //
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());

// // JavaScript Array at()
// console.log(fruits.at(-1));


// JavaScript Array join()
// console.log(fruits.join(" * "));

// // JavaScript Array concat()
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const myChildren = arr1.concat(arr2,arr3)
console.log(myChildren);

// // JavaScript Array splice()
// fruits.splice(2,0,"kiwi","Lemon");
// console.log(fruits);
// fruits.splice(0,1);
// console.log(fruits);

// // JavaScript Array slice()
const months = ["Jan", "Feb", "Mar", "Apr"];
const slicedArr = months.slice(1);
console.log(slicedArr);


// Array map method //
let numbers = [1, 2, 3, 4];
console.log(numbers);
let double = numbers.map(num=>num*2);
console.log(double);


let fruits = ['apple', 'banana', 'mango'];
let uppderCase = fruits.map(fruit=>fruit.toUpperCase());
console.log(uppderCase);



// Array forEach method //
let sumOfNumbers = [10, 20, 30, 40];
let sum = 0;
sumOfNumbers.forEach(num=>{
     sum+=num;
});
console.log(sum);


// Array find method //
let findNum = [5, 12, 8, 130, 44];
let found = findNum.find(num=>num > 10);
console.log(found);


// Array findindex method //
let findIndex = [5, 12, 8, 130, 44];
let findIndexNumber = findIndex.findIndex(num=>(num > 100));
console.log(findIndexNumber);






