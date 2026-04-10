// 25. Find and print the sum of all factors of the given number.

function printSumOfFactor(n) {
    let i = 1, sum = 0;
    while (i <= n) {
        if (n % i === 0) {
            console.log(`factor of number = ${i}`);
            sum += i;
        }
        i++;
    }
    return sum;
}

let result = printSumOfFactor(24);
console.log(result);



