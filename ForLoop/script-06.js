// 6. Calculate and print the factorial of a given number.
// function factorialTable(n) {

//     let fact = 1;
//     for (let i = n; i>=1; i--) {
//        fact = fact*i;
//     }
//     return fact
// }

// let result=factorialTable(5);
// console.log("result==>",result);


let strs = ["flower", "flow", "flight"]

var longestCommonPrefix = function (strs) {
    let prefix = "";
    for (let i = 0; i <= strs.length - 1; i++) {
        for (let j = 0; j <= strs[0].length - 1; j++) {
            if (strs[0][j] != strs[i][j]) {
                break;
            }
            else {
                prefix += prefix
            }
        }
    }
    return prefix
};

console.log(longestCommonPrefix(strs));
