/*13. Check whether the given number is a palindrome.*/

function isPalindrom(n) {
    let revNumber = 0;
    let originalNumber = n;
    while (n != 0) {
        let lastDigit = n % 10;
        revNumber = revNumber * 10 + lastDigit;
        n = Math.floor(n / 10);
    }
    if (revNumber === originalNumber) {
        return "palindrom"
    } else {
       return "Not palindrom";

    }
}

let result = isPalindrom(131);
console.log(result);
