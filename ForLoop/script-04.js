// 4. Print all odd numbers between 1 and 100.

function allOddNumber() {

    for (let i = 1; i < 100; i++) {
        if (i % 2 != 0) {
            console.log(`${i}`);
        }

    }
}

allOddNumber();