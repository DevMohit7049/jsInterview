// 14. Find and print the sum of digits of the given number.

function sumOfDigit(n){
    let sum = 0;
    while(n!=0){
      let digit = n%10;
      sum+=digit;
      n=Math.floor(n/10);
    }
    return sum;
}

let result = sumOfDigit(4215);
console.log(result);
