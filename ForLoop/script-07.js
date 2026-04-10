// 7. Calculate and print the factorial of every number from 1 to n.

function factorialOfNumber(n) {


    for (let i = 1; i <= n; i++) {
        let fact = 1;
        for (let j = 1; j <= i; j++) {
            fact = fact * j;
        }
        console.log(`factorial of => ${i} is ${fact}`);
    }

}

let result = factorialOfNumber(5);
console.log(result);

