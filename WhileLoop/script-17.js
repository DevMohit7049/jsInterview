// 17. Print all prime numbers between 1 and 100.

function primeNumber(num) {

    let i = 2;

    while (i <= num) {
        let isPrime = true;

        let j = 2;

        while (j < i) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
            j++;
        }

        if (isPrime && i > 1) {
            console.log(`${i} is prime`);

        }
        i++;
    }

}

let result = primeNumber(100);
console.log(result);
