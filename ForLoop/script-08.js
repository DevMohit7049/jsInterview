// 8. Print all prime numbers between 1 and 100.

function isPrimeNumber() {

    for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && i > 1) {
            console.log(`${i} is prime`);

        }
    }
}
let result = isPrimeNumber(100);
console.log(result);