// 20. Find and print the sum of all even numbers from 1 up to n.

function evenNumberSum(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        console.log(`${i}`);
        
        if (i % 2 === 0) {
            sum += i
        }
    }
    console.log(`${sum}`);

}

evenNumberSum(10)

