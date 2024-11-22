function say(){
    console.log("a1");
    console.log("a2");
    console.log("a3");
    console.log("a4");
    
}

say();
function add(a,b){
return a+b;
}
const s=add(1,2)
console.log(s);

function login(user){
    if(!user){
        console.log("enter the user name");
        return;
        
    }
    return `${user} login now...`
}
console.log(login("ravi"));

function calcart(val1,val2,...num){
    return num;
}
console.log(calcart(2,3,4,5,7,8,9,9));//[ 4, 5, 7, 8, 9, 9 ] 2 and 3 are in val1 and val2

const newuser={
    name:"ravi patel",
    age:20
}
function greeting(obj){
return `hii this ${obj.name} and my age is ${obj.age}`;

};
console.log(greeting(newuser));
