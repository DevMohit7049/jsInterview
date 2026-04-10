
// 1
function EvenOddFunction(number){
     
      if(number%2===0) return "even"
      else return "odd"  
}
console.log(EvenOddFunction(12));

// 2
function AreaOfCircle(radius){
   var area = Math.PI*radius*radius;
   return area;
}
console.log(AreaOfCircle(5));


// 3
function returnArr(arr){
    let sum = 0;
    arr.forEach(function(value){
         sum = sum+value;
    }) 
    return sum;
}
console.log(returnArr([1,2,3,4,5,6,7,8,9,10]));


// 4
function checkSpecificString(str,char){
  return  str.toLowerCase().startsWith(char.toLowerCase());
}
console.log(checkSpecificString("Mohit","m"));

// 5
function maximumNumber(a,b){
    if(a > b) return a;
    else if(a<b) return b;
    else return "Equal";
}
console.log(maximumNumber(2,1));

// 6 
function factorialFunction(number){
   var fact = 1;
   for(let i=number; i>1; i--){
      fact=fact*i;
   }
   return fact;
}
console.log(factorialFunction(5));

// 7
function reverString(str){
    return str.split("").reverse().join("");
}
console.log(reverString("Mohit"));

// 8
function largestNumber(arr){
    var max = 0;
    for(var i=1; i<arr.length; i++){
        if(arr[i] > arr[max]){
            max = i;
        }
    }
    return arr[max];
}

console.log(largestNumber([1,2,3,45,1,6,8]));

// 9

function kabab(str){
     return str.replaceAll(" ","-");
}
console.log(kabab("Hello ji kese ho sare"));


// 10
