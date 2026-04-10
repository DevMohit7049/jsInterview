// 24. Print all factors of the given number.

function factorOfNumber(n) {
    let i = 1;
    while (i <= n) {
        if (n % i === 0) {
            console.log(`factor of number = ${i}`);
        }
        i++;
    }
}

factorOfNumber(24);

