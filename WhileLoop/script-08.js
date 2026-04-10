/* 8. Calculate the sum of all odd numbers from 1 up to n. */
function sumOfOddNumber(n){
    let i=1;
    let sum=0;
    while(i<=n){
        if(i%2!=0){
            sum=sum+i;
        }
        i++;
     }
    return sum;
}

let result = sumOfOddNumber(10);
console.log("sum of odd number=>",result);
