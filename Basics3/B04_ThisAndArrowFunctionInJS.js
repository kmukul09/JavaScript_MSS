//


let user = {
    username: "Mukul",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to Website`); // this is use here

    }
    // this is used here to specify the context. Use it for current Context.
}

user.welcomeMessage();

// let's change userName 
user.username = "Sam"
user.welcomeMessage(); // changed 

// let's print this and see what's ouput 

console.log(this); // It returns the empty object 
// browser engines ke upr hai ye chiz


// let's see another example 

function chai() {
    let username = "Mukul"
    //console.log(this); // we can see a lot ot info in terminal 
    console.log(this.username); // output: Undefined
}

chai();

// output is Undefined because functions ke andar hum this use nhi kar skte hai 
// this bass object ke andar hi use hoga 


// Now Let's understand normal function and arrow function 

// Normal function : also expression
const el1 = function chaitime() {
    let username = "Ankit";
    console.log(username);
}

// Arrow Function : just replace keyword function with paranthesis and after that put an array like "=>"


const el2 = () => {
    let username = "UserDEmon";
    console.log(username);
}

console.log(el2);

// What is difference between function and arrow function 
/*
-> Main difference between function and Arrow if how they treat "this" keyword 
   
    -> In function "this" is dynamically scoped hence its value is determine by how the function is called 
    -> In Arrow function "this" is lexically scoped means it inherits the value of "this" from its surrounding code
    


    1.Regular functions have dynamic this binding and their own arguments object, 
     while arrow functions have lexically scoped this and lack their own arguments object.


    2.Regular functions can be used as constructors with new, support super keyword, 
     and have a prototype property; arrow functions cannot.


    3.Arrow functions have a more concise syntax compared to regular functions.

    4.Arrow functions are especially useful for concise anonymous functions and preserving this context in callback functions.
*/


// Now arrow function: 

/*
const addtwo = (num1, num2) => {
    return num1+num2;
}

console.log(addtwo(23, 34));
*/

// now since above is a one line function code so we can write it without curley braces in a single line 

// type 1
const addtwo = (num1, num2) => num1+num2; // with return and curley braces
console.log(addtwo(23, 34));

// type 2
const addthree = (num1, num2, num3) => (num1+num2+num3); // if you don't want confusion then use paranthesis 

// Above two techniques are gonna be used in react 


// type 3
// but if your function is not a one liner then it will be a problem so go with normal flow 

console.log(addthree(12, 13, 14));


// If you have to return object then 
const obj = () => ({username:"React"});
// console.log("If you want to return object, then enclose it in curley braces : " + obj());

// Arrow function is mostly used in loops 
// ex:
// const arr1 = [1,2,3,4,5,6,7,8];
// arr1.forEach(()=>{}) // Like this 












