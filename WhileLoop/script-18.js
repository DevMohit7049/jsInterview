// 19. Print the Fibonacci series up to n terms.

function isFib(num) {
    let a = 0, b = 1, i = 1, c=0;

    while (i <= num) {
        
         console.log(`fib series is =  ${a}`);
         c = a + b;
         a = b;
         b = c;
         i++;
    }
     
    
}

let result = isFib(1);
console.log(result);