const MarvelHeros = ["Thor", "IronMan", "SpiderMan"];
const DcHeros = ["SuperMan", "BatMan", "Flash"];

//MarvelHeros.push(DcHeros); // Problem arised : we got array inside array 
console.log(MarvelHeros); // The point is that array takes any type of data. Boolean, String, Number or any Other Array 

// Array koi si v data le skta hai 
// to access flash we need to do this
//console.log(MarvelHeros[3][2]); // Not a good practice

// We cound have concatinated instead of pushing the whole array
//MarvelHeros.concat(DcHeros); // but it will give the same result 
//console.log(MarvelHeros);    

// --> Actually concat merges the two array and return a new array that's why we were getting different output

let newArr = MarvelHeros.concat(DcHeros);
console.log(newArr); // Now we got merged array 

// Spreed operator : it does the same as concat basically merges 
// But it is better than concat : as it can merge more than two array in one go
const newHeros = [...MarvelHeros, ...DcHeros];
console.log(newHeros);


// rarely used : The concept of "flat"
// when we have multiple array nested inside the original arrya 
// And we want all the element in single array then we can do it by using the "flat()" 
// Argument for it: count the depth of nesting in array 
//                  You can also say "infinity" but it is better to give the depth

const NestedArray = [1,2,3,[4,5], 6, 7, [8 , 9, 10, [11, 12, 13, [14, 15]]]];
const NewAnotherArray = NestedArray.flat(Infinity);
console.log(NewAnotherArray);



// we can ask questions 

console.log(Array.isArray("MukulShandilya"));

console.log(Array.from("MukulShandilya"));

console.log(Array.from({name: "Mukul"})) // interesting

// say we have few values and we want to convert it into array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // output: it gave an array of all three variable 

