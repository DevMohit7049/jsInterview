const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };

  
let {firstName,lastName,country="india"} = person;


// String Destructuring

let name = "W3School";
let [a1,a2,a3,a4,a5] = name;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);


// Array Destructuring //

const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
let {[0]:fruit1 ,[1]:fruit2} = fruits;

console.log(fruit1);

// The Rest Property
const numbers = [10, 20, 30, 40, 50, 60, 70];
const [a,b, ...rest] = numbers;
console.log(rest);





  
  