// 20. Find and print the sum of the Fibonacci series up to n terms.

function fibSum(n) {

    let sum = 0, a = 0, b = 1, i = 1 , c=0 ;
    while (i <= n) {
         console.log(`fib series is =  ${a}`);
         sum+=a;
        c = a + b;
        a = b;
        b = c;

        i++;
    }
    return sum;
}

let result = fibSum(6);
console.log(result);
