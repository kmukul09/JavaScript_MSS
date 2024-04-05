
// there are many basis on which answer to the question "type of javascript" can be given
// but mainly there are two data-types
// 1. Primitive   
// 2. Non premitive 

// In industry we answer this question on the basis of "call by value" and "call by reference"
// The way they store data and we can assess the data if the basis of categorization of data types






//  Primitive : these are call by value
// the copy of data is passes not the reference 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) : these are called by reference 
// meaing the address or the reference is passed not the value

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// priitive data types uses a stack memory 
// non primitive data type uses a heap memory

// In stack memory we always get a copy 
// In heap memory we alwyas get a reference 

// -->>  meaning if we make any change in values then stack memory which provides copy of data
//       will change the copied value and will not bother the original value

// -->> But for heap memory only reference is passed so if any changes is made in any of the 
//      Provided references it will refelected on the original data


// ex:-

let val1 = 34543;
let bae = val1;

console.log(val1)
console.log(bae)

bae = 456544
console.log(val1) // this did not changed 
console.log(bae) // this one changed which confirms it has a stack memory


// but now let's see how object works

let userOne = {
    email : "DhramDurai@Google.com",
    phone : 543343,
    name : "Dharma Durai" 
}

let userTwo = userOne
console.log(userOne.email)
console.log(userTwo.email)
// and now let's change usertwo whcich will be 
userTwo = {
    email : "mahendra@gmail.com",
    phone : 452345,
    name : "Mahendar Bahubali"
}


console.log(" changed : " + userOne.email)
console.log(" changed : " + userTwo.email)


// ____________________________________________________________________________________________________________

// Javascript is Statically typed of Dynamically typed ?

/*
    In any language if we have to mention the data type of variables while creating it then language it statically typed
    eg: c++, C, Java, etc..

    When we don't need to mention the data type while creating the variable 
*/
