const account_Id = 123434  //This is the only one way to declare the const 
let accountEmail = "mee.sidd.2019@gmail.com"  //Varibles have two ways for declare it let and var  
var accountPassword = "12345"   // but avoid to use var.
accountCity = "Allahabad"   // it is also not a good way to use.
let accountState;

// accountId = 2
accountEmail = "mee.sidd.1919@gmail.com"
accountPassword = "21210432"
accountCity = "Bengaluru"
// console.log(account_Id)   //; is choice
/*Prefer not to use var because of issue in block scope and functional scope*/
console.table([ account_Id ,accountEmail, accountPassword , accountCity , accountState])


