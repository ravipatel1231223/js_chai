//premitive >>string number bool null umdefine symbol BigInt

//refrence type>> array object Function

// string >>string
// number>>number
// boolean>>boolean
// symbol>>symbol

// null>>object

// undefine>>undefine
// array>>array object
// object>>object

// function>>function object

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

//memory stack(premitive ) heap(non premitive)
//  atle ke premitive type copy bane orginal ma kaii farak na pade ho bhai
let name="ravi";
let name1=name;
name1="abhi"
console.log(name);//ravi
console.log(name1);//abhi

// pan bhai jo apare non premitive ma orginal value marak pade ho bhai 

let bio={
    name:"ravi",
    surname:"patel"

}
let bio2=bio;
bio2.name="abhii"
console.log(bio2);//{ name: 'abhii', surname: 'patel' }

console.log(bio);//{ name: 'abhii', surname: 'patel' }

