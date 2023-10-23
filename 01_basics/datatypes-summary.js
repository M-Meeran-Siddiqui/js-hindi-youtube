//*******For Master JavaScript Do only two things (a): Objects  , (b):browser web events or browser events********/
//**********And J-s is  a dynamic typed language *************/
//Primitive
// 7 types : String  (they are call by values) , Number , Boolean , null , undefined, Symbol , BigInt (like a long)

const score = 100;
const scoreValue = 100.3;

const isLoggedIn  = false;
const outsideTemp = null;
let userEmail;   //by default it gives undefined.

const id = Symbol('123');
const anotherID = Symbol('123');

console.log(id === anotherID);

const bigNumber = 34503458353534050509583458430n  // n is used for bigint denotation.




// Reference (Non primitive)
// Array , Objects , Functions

const heros = ["shaktiman" , "naagraj" , "doga"];  //jo curely braces mein jo kuch bhi hai wo object and datatypes kuch bhi ho skta hai.

let myObj = {
      name : "Meeran",
       age : 22,
}

const myFunction = function(){
     console.log("Hello World");
}


console.log(typeof outsideTemp);
console.log(typeof scoreValue);



//How to creata Functions

const cyFunction =function(){   // how to create function to inside the variable.
     console.log("Hello world");
}

console.log(typeof bigNumb )
console.log(typeof  outsideTemp)


//https://262.ecma-international.org/5.1/#sec-11.4.3