const time=new Date()
// console.log(time.toDateString());//Thu Nov 21 2024
// console.log(time.toISOString());//2024-11-21T04:49:31.205Z
// console.log(time.toLocaleDateString());//11/21/2024
// console.log(time.toJSON());//2024-11-21T04:49:31.205Z
// console.log(time.toLocaleString());//11/21/2024, 4:49:31 AM

const timestamp=Date.now()
console.log(timestamp);//1732164941308 in mili sec
//in sec 
console.log(Math.floor(timestamp/1000));//1732165080sec

console.log(time.getDate());
console.log(time.getMonth()+1);
time.toLocaleString('default',{
    weekday:"long"
})

console.log(time);


