//


let user = {
    username : "Mukul",
    price: 999,

    welcomeMessage: function(){
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

function chai(){
    let username = "Mukul"
    //console.log(this); // we can see a lot ot info in terminal 
    console.log(this.username); // output: Undefined
}

chai();

// output is Undefined because functions ke andar hum this use nhi kar skte hai 
// this bass object ke andar hi use hoga 


// Now Let's understand normal function and arrow function 

// Normal function : also expression
const el1 =  function chaitime() {
    let username = "Ankit";
    console.log(username);
}

// Arrow Function : just replace keyword function with paranthesis and after that put an array like "=>"


const el2 = () => {
    let username = "UserDEmon";
    console.log(username);
}








