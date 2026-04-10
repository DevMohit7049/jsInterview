// 12. Print all factors of the given number.
function allFactorOfNumber(num) {
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(`factor of number = ${i}`);
        }
    }
}

allFactorOfNumber(5)