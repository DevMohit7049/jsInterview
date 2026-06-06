// 10. Print the Fibonacci series up to the required number of terms.
// function fibonacci(n) {
//     let a = 0, b = 1, c = 0;
//     for (let i = 0; i <= n; i++) {
//         console.log(`fib series is =  ${a}`);
//         c = a + b;
//         a = b;
//         b = c;
//     }
// }


function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(5));

 