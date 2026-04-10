// 1

// for(var i = 1; i<=50; i++){
//     console.log(i);
// }

// 2

// var sum = 0, i=1;
// while(i<11){
//     sum = sum + i;
//     i++;
// }

// console.log(sum);

// 3
// var jsString = "JavaScript";
// for(let charcter of jsString){
//     console.log(charcter);
// }


// 4
// for(let i = 1; i<21; i++){
//     if(i%2!=0){
//         console.log(i);
//     }else{
//     }
// }


// 5
// var i = 5;
// do {
//     console.log(i);
//     i--;
// }
// while (i > 0)


// 6
// let n=10;
// fact = 1;
// for(let i=n; i>0; i--){
//     fact = fact*i;
// }
// console.log(fact);


// 7
var hold = 1;
for (let i=1; i<4; i++){
    var str = " ";
    for(let j=1; j<4; j++){
       str+=`${hold} `;
       hold++;
    }
    console.log(str);
}

// 8.
var arr = [1,2,3,4,5];
for(var i=0; i < Math.floor(arr.length/2); i++){
   var temp = arr[i];
   arr[i] = arr[arr.length-1-i];
   arr[arr.length-i-1] = temp;
}
console.log(arr);

// 9

let num=1;
while(num<101){
     if(num%5===0) console.log(num);
     num++;
}



var obj = {
    name:"mohit",
    email:"m@gmail.com",
    mobile:4545
}

for(let key in obj){
    console.log(key);
    
}


