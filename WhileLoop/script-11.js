/* Count and print the total number of digits in a given number */

function totalDigit(n){
  let count = 0; 
  while(n!=0){
    n = Math.floor(n/10);
    count++;
  }
  return count;
}

let result = totalDigit(1212);
console.log(result);
