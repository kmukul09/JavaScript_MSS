// Function is JavaScript is similar to function in other languages 

// if a piece of code is required at a lot places in code then instead of writing it again and again we can make
// a block for it and that block can be called instead writing code , we call it function

// Example 
/*
console.log("M");
console.log("u");
console.log("k");
console.log("u");
console.log("l");
*/


// now if we are told to do above task multiple time it will be hedious and time taking 

// so what we do is we put this code in a clock assign a reference to it for calling 

function sayMyName(){

    console.log("M");
    console.log("u");
    console.log("k");
    console.log("u");
    console.log("l");

}


// new with the help of reference we can call this function 
// sayMyName();

// we can call this function as many time as we want 

// now we have few problems with functions in javaSript 

// Let's make a addtwoNumberFunction()'

function AddtwoNumber(num1, num2){
    console.log(num1 + num2);
}

// AddtwoNumber(3, 7);
// but when we do this 
// AddtwoNumber(3, "4"); // then probelm occcurs because output will be a string 
// SO we have to be carefull while using function and we should always check for datatype of arguments 


// when while making a function we write input variables it is called Parameters 
// and while calling that function we pass values those are called arguments


// function with return;

function multiply(num1, num2){
    let result = num1*num2;
    return result;
}

let result = multiply(4,5)
// console.log(result);

/*
function UserLogingMessage(usrname){
    return `${usrname} Just Logged In`; 
}

console.log(UserLogingMessage("Mohit"));
*/


// if while calling the function we did no passed any argument 
// console.log(UserLogingMessage());
// Output will be : Undefined Just Logged In 
// Because argument are not passed and hence nothing is defined


//let's tackel this situation by using if else statement 

function UserLogingMessage(usrname){
    if(usrname === undefined){
        console.log("Please enter a username");
        return ;
    }
    return `${usrname} Just Logged In`; 
}

console.log(UserLogingMessage());
console.log(UserLogingMessage("Subham"));


// Extra : "!" is a logical NOT

// irrespective of user input we can pass a defalut value to function 
// So if user forgot to enter value defalut value will be there 
// and if user input is given then the defalut value will over write
 