//ek var array intialization karyya pachi change kari shakay

// ARRAY NI COPY Karo to shalow copy bane 
// sholow copy atle refrence copy cpoy ma change karo to orginal ma change thay

const arr=[1,2,3,4,'rsxh']
const arr2=new Array(12,34,35,65,7)

// console.log(arr.length);
arr.push(23);
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(12)//aagar thi elemnt add kare
console.log(arr);

arr.shift()//aagar thi pop jevu kaam kare
console.log(arr);


console.log(arr.includes(9));

const arr3=arr.join()//join convert array to string 
console.log(typeof(arr));//object
console.log(typeof(arr3));//string

const arr5=[0,1,2,34,5,6]

console.log(arr5.slice(0,3)); // return new array start with 0 to 2 [0,1,2]

console.log(arr5.splice(0,3));// return new array strat with 0 to 3 andddd orginal array remove value 0 to 3

console.log(arr5);//[34,5,6]


















