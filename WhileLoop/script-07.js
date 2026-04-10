/* 7. Calculate the sum of all even numbers from 1 up to n. */ 

function evenNumbers(n){
  let i = 1;
  let sum = 0;
    while(i<=n){
        if(i%2===0){
           sum=sum+i; 
        }
      i++;
    }
    return sum;
}

let result = evenNumbers(10);
console.log("sum of even number=>",result);


