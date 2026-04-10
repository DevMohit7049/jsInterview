// var x = 10;
// var x = 20;
// console.log(x);

// function test(){
//     var y = 30;
//    console.log(y);
// }
// test();


// console.log(a);
// var a = 10;
// console.log(a);

// console.log(b);
// let b = 20;
// console.log(b);



let arrow = ()=>{
  console.log("hyy");
  
}
arrow();

// spread operator
let x = [1,2];
let y = [3,4];

let z = [...x,...y];
console.log(z);


// rest operator
function example(...args){
  console.log(args);

}
example(1,2,3,4,5);


// destructuring

const user = {
   "age":10,
   "name":"mohit"
}

const {age,name} = user;
console.log(age,name);


// indexOf method //
const arr = [1,2,3,4,5,6];
let a = arr.indexOf(4);
console.log(a);

// find()

const arr2 = [1,2,3,4,5,6];
let b = arr2.find((num)=>num%2==0);
console.log(b);


// filter()
const arr3 = [1,2,3,4,5,6];
let c = arr3.filter((num)=>num%2==0);
console.log(c);


// slice()

const arr4 = ["a","b","c","d","e"];
let d = arr4.slice(1,4);
console.log(d);

// splice()

let letter = ['a','b','c'];
letter.splice(1,0,'x','y');
console.log(letter);


// map()
let letterTwo = [1,2,3,4];

let mapArr = letterTwo.map((ele)=>ele*2)
console.log(mapArr);

// forEach ()
let letterThree = [1,2,3,4];
let forEachResult = letterThree.forEach((elem)=>{
  console.log(elem);
});




