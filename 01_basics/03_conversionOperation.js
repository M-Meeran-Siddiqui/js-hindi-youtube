// let score = "33abc";
// let score = null;
// let score = undefined;
// let score = true;
let score = "Meeran";

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//Note: When you get <NaN> then remember that it is also a type and used to check whether the number is in the form that is =>"33abc";

/*
    "33"  => 33
     "33abc" => NaN
      true => 1 , false => 0 
 */

  let isLoggedIn = 1;     
  let booleanIsLoggedIn = Boolean(isLoggedIn);
//   console.log(valueInNumber);


// 1 => true; 0 => false
// ""  => false
// "hitesh" => true


let someNumber = 33;
let stringNumber  = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ************************** Operations ****************************************
let value = 3
let negValue = -value;
// console.log(negValue);

console.log(2**3);  // it is just like a power operator which gives the power  of the given number . 

let str1  = "hello"
let str2  = " Meeran"
 
let str3 = str1 + str2;
// console.log(str3);
// console.log("1"+ 2);
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log((3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1 , num2 , num3

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
// gameCounter++;
console.log(++gameCounter);
console.log(gameCounter++);

//Link to study https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

