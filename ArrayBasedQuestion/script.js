
// 1

// let arr = ["a","b","c","d","e","f"];
// arr.forEach(function(arrItem){
//     console.log(arrItem); 
// });

// 2
// let arrTwo = [1,2,3,4,5,6];
// console.log(arrTwo[1]);

// 3
// let arr = [3,4];
// arr.unshift(1,2);
// console.log(arr);

// 4
// let lastArr = [1,2,3,4,5,6];
// lastArr.pop();
// console.log(lastArr);

// 5
// let sliceArr = [1,2,3,4,5,6];
// console.log(sliceArr.slice(0,3));

// 6
// let indexOfArr = [1,2,3,4,5,6];
// console.log(indexOfArr.indexOf(6));

// 7
// let includeArr = [1,2,3,4,5,6];
// console.log(includeArr.includes(10));

// 8

// let firstArr = [1,2,3];
// let secondArr = [4,5,6];

// console.log(firstArr.concat(secondArr));

// 9
// let arr = [1,2,3,4];
// let arrTwo = [];

// arr.forEach(function(value){
//      arrTwo.push(value);
// });
// console.log(arr);
// console.log(arrTwo);


// 10

var arr = [11,24,36,2,5];
for(var i=0; i<arr.length; i++){
    for(var j=0; j<arr.length-1; j++){
          if(arr[j] > arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
          }
    }
}
console.log(arr);


// 11 

// let arrTwo = [11,24,36,2,5];
// console.log(arrTwo.indexOf(-1));


// let car=undefined;
// console.log(car);


function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let text = "The temperature is " + toCelsius(77) + " Celsius";

// console.log(text);


// Object Creation using curly braces
// const person = {};
// person.name = "Mohit";
// person.lastName = "Tomar";
// person.age = "24";

// console.log(person);


// Object Creation using new keyWord 

// const person = new Object();
// person.name = "Mohit";
// person.lastName = "Tomar";
// person.age = "24";

// delete person.age
// person.nationality = "indian"

// for (let x in person){
//    console.log(person[x]);
   
// }



const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const myArray = Object.values(person)
console.log(myArray);

const fruit = {Bananas:300, Oranges:200, Apples:500};

for(let [fruits,value] of Object.entries(fruit)){
   console.log(fruits + value);
}

