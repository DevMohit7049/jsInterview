/* 6. Calculate and print the sum of the first n natural numbers.*/
let sum = 0;
let i = 0;
function sumOfNaturalNumbers(n){
   while(i<n){
      sum=sum+i;
      console.log(i);
      i++;
   }
}
sumOfNaturalNumbers(5);
console.log("total=",sum);