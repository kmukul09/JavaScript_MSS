// let's underdstand these variable declearaton 

// -->> we have 3 way to declear a veriabl 
// -> const  ------> For Constant variable
// -> let    ------> for normal non constant variable
// -> var    ------> adviced not to use it cuz its confused for its scope 


// ## example 

const accountId = 1449345
let accountMail = "sam@google.com"
var accountpassword = 12234
accountCity = "Muzaffarpur"
isloggedin = false


// lets try to know the type of variables
/*
console.log(typeof(accountId))
console.log(typeof(accountMail))
console.log(typeof(accountpassword))
console.log(typeof(accountCity))
console.log(typeof(isloggedin))
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let's try to change the const variable 
// accountId = 232342  -->> Giving error because changes are not allowed in constant 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// --> other than const we can chnage others 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Now to print them we have to call console.log 4 times
console.log(accountMail)
// but we also have a different way 
// Here we will use console.table with square bracket and put all the name in that
console.table([accountId, accountMail, accountpassword, accountCity])
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// So main difference between var and Let is that Var does not know its scope 
// Meaning it does not kown till what block it should be accessed
// So everyOne is advised to use Let as ( let ) not var


// ______________________________ That's all for this lacture _______________________________________________________________