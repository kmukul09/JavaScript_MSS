// Here we will understand the scops of variables 

/*
let a = 10;
const b = 23;
var c = 90;

// let's access those variables
console.log(a);
console.log(b);
console.log(c);
*/

// but if we put these variables inside function of block of code 
// say if 

if(true){
    let a = 10;
    const b = 23;
    var c = 90;
}

// and then if we try to access these 
// console.log(a); // can't be accessed due to scope 
// console.log(b); // Can't be accessed dur to scope

// console.log(c); // but ye access ho rha hai 

// upr me jo access nhi ho rhe hai wo sare sahi hai but ye jo access ho ja rha hai ye galat hai 
// So it is adviced not to use "Var"

// Now global variable and local variable 

let global = 100;

function empty1(){
    let global = 89;
    console.log("Inner : " + global); 
    // Scope of inner Global is fixed till here
} 

empty1();
console.log("Outer : " + global);
// scope of global varibale is throughout anywhere in code 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Scopes ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

if(true){
    const username = "mukul"
    if(username == "mukul"){
        const website = "Youtube"
        console.log(username + website);
    }
    // console.log(website); // Not allowed
}
// console.log(username)  // Not allowed

// ****************************** Interesting *************************

// type 1 : Just function

console.log(addone(5));

function addone(num){
    return num + 1;
}

// addone(5);


// here in type 1 if we call the function before defining it it will work even then 





// console.log(addtwo(5)); // It will give error as in expression it is not allowed
// It is called hoisting problem 

// type 2 : It is function, also called expression 
const addtwo  = function(num){
    return num + 2;
}

addtwo(5);
