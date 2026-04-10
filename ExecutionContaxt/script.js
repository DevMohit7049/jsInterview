console.log('start of script ');

setTimeout(()=>{
    console.log('this is from task queue ');
},0);

Promise.resolve().then(()=>{
    console.log('this is from microtask queue promise');
    
})

console.log('end of script ');