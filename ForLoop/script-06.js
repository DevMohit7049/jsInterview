// 6. Calculate and print the factorial of a given number.
function factorialTable(n) {

    let fact = 1;
    for (let i = n; i>=1; i--) {
       fact = fact*i;
    }
    return fact
}

let result=factorialTable(5);
console.log("result==>",result);

