// 15. Check whether the given number is an Armstrong number.

function armstrongNumber(n){
    let count = 0, sum=0 , temp=n , digit=0;
    let originalNum = n;

    while(temp>0){
      count++;
      temp = Math.floor(temp/10);
    } 

    while(n>0){
        digit = n%10;
        sum+=digit**count;
        n=Math.floor(n/10);
    }

    return sum===originalNum;
}

let result = armstrongNumber(1534)
console.log(result);

