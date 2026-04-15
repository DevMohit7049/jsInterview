// 1. Print the multiplication tables for all numbers from 1 to 10.

function multiplicationTableForAll() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`table=${i} = ${i} X ${j}`);
        }
    }
}

multiplicationTableForAll();