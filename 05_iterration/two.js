// ++++++++++++++++++++++++++ filter +++++++++++++++++++++++++++++++++++++++++

// const arr=[22,3,45,5,60,21] 

// const newarr=arr.filter((i)=>(i>20));//[ 22, 45, 60, 21 ]
// console.log(newarr);// array ma thi condition wara data catch karva mate
// // ++++++++++++++++++++++++++ map +++++++++++++++++++++++++++++++++++++++++

// const newarr1=arr.map((i)=>(i*10))
// .map((i)=>(i+1))
// console.log(newarr1);//[ 221, 31, 451, 51, 601, 211 ]// arr no data badlva mate


// ++++++++++++++++++++++++++ reduce +++++++++++++++++++++++++++++++++++++++++

// const user=[12,34,56,88,12,33]
// const sum=user.reduce((ac,cl)=>(console.log(`${ac} and ${cl} `) ,ac+cl
// ),0);
// console.log(sum);

const obj=[{
    pro:"bottle",
    price:200
},{
    pro:"glass",
    price:49
},{
    pro:"spoon",
    price:19
}
]
const sum=obj.reduce((acc,item)=>(acc+item.price),0)
console.log(sum);

