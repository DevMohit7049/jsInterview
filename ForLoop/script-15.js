// 15. Find the LCM (Least Common Multiple) of the given numbers.

function LeastCommonMultiple(num1, num2) {
    let LCM = 0;
    for (let i = 1; ; i++) {
        let multiple = num1 * i;
        if (multiple % num2 === 0) {
            LCM = multiple;
            break;
        }
    }
    console.log(`least common multiple is = ${LCM}`);

}

LeastCommonMultiple(5, 7);
