//  Primitive

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



// Reference (Non primitive)

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


