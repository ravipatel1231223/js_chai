const arr1=[1,23,4,556,]
const arr2=[6,7,8,9,0]
// arr1.push(arr2)
// console.log(arr1);//[ 1, 23, 4, 556, [ 6, 7, 8, 9, 0 ] ]
// const all=arr1.concat(arr2);
// console.log(all);

const newall=[...arr1,...arr2]

console.log(newall);

const ar=[12,44,5,6,[1,3,44,[5,46,2]]]

console.log(ar.flat(Infinity));//return arr convett into 

console.log(Array.isArray('ravipatel'));//false

console.log(Array.from('ravi'));//[ 'r', 'a', 'v', 'i' ]
console.log(Array.from({name:'ravi'}));//[] instrestingggggggggg

let a=12
let b=13
let c=14
console.log(Array.of(12,13,14));//[ 12, 13, 14 ]




