// 16. Check whether the given number is a Perfect number.
function perfactNumber(num) {
    let sum = 0, i = 1, temp = 0;

    while (i < num) {
        if (num % i === 0) {
            sum+=i;
        }
        i++;
    }
    return sum===num ? `${num} is Perfect`: `${num} is not perfact number`
}



let result = perfactNumber(24);
console.log(result);


