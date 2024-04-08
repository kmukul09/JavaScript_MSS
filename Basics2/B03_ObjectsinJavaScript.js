// objects in depth 

// Singleton

//Object Literals

// After line 35 : Let's create a symbol
const mysym = Symbol("Key1");

const obj1 = {
    name : "Mukul",
    "FUll Name" : "Mukul Shandilya",  // example to show importance of obj1[] access
    Uid : 9309,
    [mysym]: "myKey1", // to use it as symbol we put it inside square brackets 
    email: "Mukul@google.com",
    phone: 6200983,
    psp : 345,
    isloggerIn: true,
    LastLoginDays: ["Monday", "Tuesday", "Wednessday"]
}

// here inside object we have "key:value" pair 
// we can give an object too as value 

/*
console.log(obj1.Uid);
console.log(obj1.name);
console.log(obj1.email);
console.log(obj1.phone);
console.log(obj1.psp);
*/

// There is another way to access the object key value
// pass every value as string to access the key:Value of object 
/*
console.log(obj1["nmae"]);
console.log(obj1["email"]);  // pass email as string while accessing this way
console.log(obj1["FUll Name"]);
console.log(obj1["phone"]);
console.log(obj1[mysym]); // to use mysym as symbol we need to use it in square box
*/

// find the typeof object
// console.log(typeof obj1);



// Basics of Object :

// to change the value if object 
obj1.email = "Mukul@Google.com" // Simply assign the value to that attribute of object

// if you don't wnat anyone to change any value of object then we can freez the object
// Object.freeze(obj1);

// obj1.email = "Sagar@okSSbi.con";

//console.log(obj1); // we can see email did not changed so obj1 has beed freezed

// let's create out first function 
// Greeting function 

obj1.greeting = function(){
    console.log("Hello Js User");
}

// calling that function 
// console.log( "Output Without parenthesis : " + obj1.greeting);
console.log("Output With parenthesis : " + obj1.greeting());
 
obj1.greetingtwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(obj1.greetingtwo());
