// 22. Print the cube of each number from 1 to n.
function printCube(n){
    let i = 1, arr=[];
    while(i<=n){
        let cube = i*i*i;
        console.log(`cube of ${i} = ${i*i*i}`);
        arr.push(cube);
        i++;
    }
    return arr;
}
result = printCube(20);
console.log(result);
