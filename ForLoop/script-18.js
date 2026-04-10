// 18. Print all numbers between a and b that are divisible by 7.

function printNum(a, b) {
    for (let i = a; i < b; i++) {
        if (i % 7 === 0) {
            console.log(`number which is divisible by 7 is =${i}`);

        }
    }
}

printNum(10, 100)