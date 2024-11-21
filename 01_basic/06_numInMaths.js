const score=100

console.log(score);//100

const no=new Number(100)

console.log(no);//[Number: 100]


console.log(no.toString());//100


console.log(no.toFixed(2));//100.00
const num=123.34
console.log(num.toPrecision(3));//123 //1233.34>>1.23e+3

// +++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-29));//29
console.log(Math.round(4.6));//5
console.log(Math.ceil(434.01));//435
console.log(Math.floor(434.01));//434

console.log(Math.min(4,2,34,56,1));//1
console.log(Math.max(4,2,34,56,1));//56

console.log(Math.random());//0to1
console.log(Math.random()*10);

// we want to value btw 10 to 20

const min=10;
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min));









