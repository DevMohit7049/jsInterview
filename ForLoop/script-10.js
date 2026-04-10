// 10. Print the Fibonacci series up to the required number of terms.
function fibonacci(n) {
    let a = 0, b = 1, c = 0;
    for (let i = 0; i <= n; i++) {
        console.log(`fib series is =  ${a}`);
        c = a + b;
        a = b;
        b = c;
    }
}

fibonacci(10);
