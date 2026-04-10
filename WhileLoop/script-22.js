// 23. Print all numbers between a and b that are divisible by 7.

function divisibleBySeven(a,b){
    let i = a;
    while(i<=b){
      if(i%7===0){
         console.log(`${i} is divisible by 7`);
      }
      i++;
    }
}

divisibleBySeven(2,20);

