/* 5. Print the multiplication table of a given number from n × 1 to n × 10. */

function MultiplicationTable(number){  
    let i = 1;
    while(i<=10){
        console.log(`${number} X ${i} =`,i * number);
        i++;
    }
}

MultiplicationTable(8);

