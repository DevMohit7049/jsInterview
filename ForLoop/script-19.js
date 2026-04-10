// 19. Find and print the sum of the first n natural numbers.

function sumOfNaturalNumber(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i
    }
    console.log(`${sum}`);

}

sumOfNaturalNumber(10)