// 13. Find and print the sum of all factors of the given number.

function sumOfAllFactor(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            sum+=i;
        }
    }
console.log(`Sum of factor = ${sum}`);
}

sumOfAllFactor(10)