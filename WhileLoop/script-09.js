// 9. Calculate and print the factorial of a given number.
/* formula - n! = n*(n-1) x (n-2) x (n-3) 
             5! = 5*(5-1) x (5-2) x (5-3) x (5-4) 
*/

function factorialOfNumber(n){
   let fact = 1;
   let i = n;
   while(i>=1){
     fact = fact*i;
     i--;
   }
   return fact;
}
let result = factorialOfNumber(8);

console.log("factorial===>",result);

/*
  n=5
  
*/



