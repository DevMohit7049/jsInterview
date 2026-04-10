// 9. Check whether the given number is a prime number.

function isPrimeNumber(n) {
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {
        console.log("loop start");
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

isPrimeNumber(10);