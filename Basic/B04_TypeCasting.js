// Let's learn how do we convert one DataType variable into another 

let score = "Mukul"
// score = 34
// console.log(typeof score)

let str = "33"
console.log(typeof str) // here it is string 

let valueInNumber = Number(str)   // typecasting string into Number 
console.log(typeof valueInNumber)
console.log(valueInNumber)

let str2 = "2324asds" // along with number there are some characters are also there
let newnumber = Number(str2) // typecasting will be done but it will give not a number 
console.log(newnumber) // NaN -> Not a Number

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let num = 35345345
let strings1 = String(num) // converted into string 
console.log(strings1) // written as string 
console.log(typeof strings1) // type string 


// and many More 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ************************************************** Operation *************************************************
let value = 3
let negetiveValue = -value // to make a veribale numebr negative just put -ve sign no need to multiply with -1
console.log(negetiveValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let s1 = "Mukul"
let s2 = "Kumar"

let fin = s1 + s2 // concatinate above two strings without any space between then 
console.log(fin)

let fin2 = s1 + " " + s2 
console.log(fin2) // Concatination of two strings with space between them 


// Some Practice Element 

console.log("1" + 2 ) // concatinate as a string with 2 treating 2 also as a tring 
console.log( 1+ "2")
console.log("1" + "2")
console.log(1+2+3)
console.log(1 + 2 + "3")

console.log((3+4) * 5%3)

console.log( + true)
console.log(+" ")


// increment 
let gamecounter = 100
gamecounter++
console.log(gamecounter) // icremented by 1