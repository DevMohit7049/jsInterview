// 14. Find the HCF (Highest Common Factor) of the given numbers.
function HighestCommenFactor(num1, num2) {
    let HCF = 0
    for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            HCF = i;
        }
    }
    console.log(`HCF of both number is ${HCF}`);

}

HighestCommenFactor(8, 20);