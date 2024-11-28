// for (let i = 0; i < 10; i ++) {
//    console.log( i );
   
    
// }

//do while 

//while
// ++++++++++++++++++
//for of
// const arr=[1,2,435,,7,7]
//  for (const i of arr) {
//     console.log(i);
    
//  }

// +++++++++++++++

const map=new Map()//for unique value
map.set("in","India")
map.set("us","America")
map.set("pk","pakistan")

// for (const [key,value] of map) {
//     console.log(key+"-->>"+value);
    
// }

//for of loop cantnnnn itert in object

// for obj/

// const obj={
//     name :'ravi poatel ',
//     age:20
// }
// for (const key in obj) {
//     console.log(key);
//     console.log(obj[key]);
    
// }
// for in loop in not iteratable 

// ++++++++++++++++++++++++++++++++++++++++++

// for each loop

const arr1=[1,32,34,6,8,9,,,,,0,]
// arr1.forEach(function (i) {
//     console.log(i);
    
// })
// arr1.forEach((i)=>{
//     console.log(i);
    
// })
// function printme(params) {
//     console.log(params);
    
// }
// arr1.forEach(printme)
const obj2=[{name:"ravi",age:20},{name:"dabav",age:29},{name:"piyu",age:8}]

obj2.forEach((i)=>{
    console.log(i.name);
    return i;//undefine
    
})

/// we want to return some value but foreach return undefine only so ......
