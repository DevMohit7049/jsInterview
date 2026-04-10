// 11. Find and print the sum of the Fibonacci series.

function sumOfFib(num) {
    let a = 0, b = 1, c = 0, sum = 0;
    for (let i = 0; i <= num; i++) {
        console.log(`fib series is =  ${a}`);
        c = a + b;
        sum += a;
        a = b;
        b = c;
    }
    console.log(sum);

}

sumOfFib(10);