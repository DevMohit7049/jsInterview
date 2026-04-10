/*12. Reverse the given number and print the reversed value.*/

function reversNumber(n){
  let reverseNum = 0;
  while(n!=0){
    let lastDigit = n%10;
    reverseNum = reverseNum * 10 + lastDigit;
    n = Math.floor(n/10);
  }
  return reverseNum;
}

let result = reversNumber(8214);
console.log(result);



