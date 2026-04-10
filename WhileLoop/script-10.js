/* Find and print the product of all digits of a given number */

function productOfAllDigit(n){
    let product=1, digit=1;
    while(n!=0){
      digit = n%10;
      product = product*digit;
      n = Math.floor(n/100);
    }
    return product;
}

let result = productOfAllDigit(212);
console.log(result);
