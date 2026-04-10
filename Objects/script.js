// Object literals { }
//    Advantages:
    //    simple hote he magar it does not act as blue print
    // agar mujhe object me , koi function daalna ho to mujhe har individual object me jake uss function ko 
    // update karna padega , which is wrong 

// const person = {
//     fname:"Mohit",
//     lname:"tomar",
//     contact:"7049067324",
//     getName:function(){
//          console.log("mohit"); 
//     }
// };

// const p2 = {
//     fname:"Manish",
//     lname:"Phate",
//     contact:"7049067324",
//     getName:function(){
//          console.log("manish");
//     },
// };


// const p3 = {
//     fname:"Manish",
//     lname:"Phate",
//     contact:"7049067324",
//     getName:function(){
//          console.log("manish");
//     },
// };


// console.log(person.getName);


// agar hame iss code repetition ki problem ko solve karna he to ham use karenge ek base blue print which is "constructor function"


/* constructor function - esa function jo object ko construct karne me help karta he  


Nomal function - camelCasing 
getAge(), addNumbs()


Constructor Function - PascalCasing
*/


// base blueprint - constructor function
// function Person(fname, lname, contact){
//   this.fname = fname;
//   this.lname = lname;
//   this.contact = contact;
//   this.getName = function(){
//     console.log(this.fname,this.lname); 
//   }

//   this.getContact = function(){
//      console.log(this.contact);
     
//   }
// }

// const person1 = new Person("Mohit", "Tomar", "88888");
// const p2 = new Person("Jon", "Doe","55555");


// console.log(person1.fname,person1.lname);
// console.log(p2.fname,p2.lname);


// Now ES6 me constructor function ko use karna thoda anti or say thoda tricky tha then js introduct class keyword  and function constructor deprectated//

class Person{
   constructor(fname,lname,contact){
      this.fname = fname;
      this.lname = lname;
      this.contact = contact;
   }
   getContact(){
      console.log(this.contact);
   }
 
   getName(){
     console.log(this.fname); 
   }
}

