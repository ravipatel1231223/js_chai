// const obj=new Object()//singleton
const user={}//non singleton
user.id="ravi123"
user.name="patel ravi"
user.email="ravi@google.com"

// console.log(user);
//nested obj in obj in obj bani shake 

const obj1={a:'12',b:'34'}
const obj2={a:'23',c:'24'}

// const obj3=Object.assign({},obj1,obj2)//{ a: '23', b: '34', c: '24' }
// const obj3={...obj1,...obj2}

// console.log(obj3);
// console.log(Object.keys(user));//[ 'id', 'name', 'email' ]
// console.log(Object.values(user));//[ 'id', 'name', 'email' ]
// console.log(Object.entries(user));//[ 'id', 'name', 'email' ]

const {a}=obj2;// value fatch karva mate obj2 mathi
console.log(a);
//json
// {
//     'name':'ravi ',
//     "age":14

// }






