// Imagine a situation where you have an array an you want to loop over it and retun some value
/*
const tempArr = ["Py", "RB", "Java", "cpp", "HTML", "XML"];

// let's try to return some thing 
const value = tempArr.forEach( (item) => {
    console.log(item);
    return item; // return item which will be stored value 
})

console.log(value); // return hua undefined : forOf, ForIn, ForEach any of these loops does not returns any value
*/

// so the summary of the story is that forEach does not returns anything 


// Now many times we want to perform operations on each element in loop but many time we just want to return something 
// for that purpose we have some other things:

// More Methods in javaScript 

const myNumarr = [1,2,3,4,5,6,7,8,9,10];

// esme v call back funtion hi dalte hai 
/*
const newNums = myNumarr.filter( (num) => num > 4 ); 
// yahan agr call back function ki trh curley bracket me daloge the problem hogi
// scopes ki batt rkte hu huy btaya tha that agr apne curley bracket lga dia toh apko return likhna pdega or nhi lgaya hai toh simple on line wale function chal zaynge 
// ye filter out krta hai based on some condtion and if condition is not complex then it is good to write it in one line 
// Since filter function array ka ek part return krta hai based on some condition we need to store it somewhere and something
console.log(newNums);
*/

// so this other way is here 
/*
const newnumsArr = myNumarr.filter( (num) =>  { return num > 4 }) // arrow function 
console.log(newnumsArr);
*/

// now if we want ki nhi hum toh forEach se hi return krwaynge then : it is programming 
// we can do anything 

// first make an empty array 
const result = [];

//now use forEach
myNumarr.forEach((num) => {
    if(num > 4){
        result.push(num);
    }
}) 

// check the result array 
console.log(result);

// you can use any as you please 