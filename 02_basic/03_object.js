//singleton if object made by constructor
// obj litearls
const mysyn=Symbol('key1')
const user={
  
    name:"ravi",
    age:20,
    [mysyn]:"ravipatellllll",//Symbol mate [mysy] jj lakhvu // only mysy nottttt
    email:"ravi@google.com",
    login:false,
    loginDay:["mon","thu"]
    
}
console.log(user.email);
console.log(user["email"]);
/*
ravi@google.com
ravi@google.com
*/ 
// console.log(typeof(user[mysyn]));
console.log(user[mysyn]);
user.email="ravi@yt.com"
console.log(user["email"]);
// Object.freeze(user)
user.email="ravi@youtube.com"
console.log(user);

user.greeting=function(){
    console.log("heloo from greeting");
    
}
user.greetingTwo=function(){
    console.log(`hii mr ${this.name} thank you for come in....`);//thisssss
    
}
// console.log(user.greeting());
console.log(user.greetingTwo());






