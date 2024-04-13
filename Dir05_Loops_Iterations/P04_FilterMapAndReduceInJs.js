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

const myNumarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
    if (num > 4) {
        result.push(num);
    }
})

// check the result array 
// console.log(result);

// you can use any as you please 

// Now let's see a real project based case 

// this is a db or book 



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// find the book of genre "history"

let userbooks = books.filter((bk) => {
    return bk.genre === 'History'
})
// console.group(userbooks);

// with science genre
let userbooks1 = books.filter((bk) => bk.genre === 'Science');
// console.group(userbooks1);

// give all those books that have been published after 1996

let userbooks2 = books.filter((bk) => bk.edition > '1996');
// console.group(userbooks1);

// to add more than one condition use logical operators 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MAP ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// map method : ye forEach se better method hai 
// it also uses call back function 
// It does not mutate the original array.
// The map() method in JavaScript creates a new array populated with the results of 
// calling a provided function on every element in the calling array.

/*
    callback: Function that is called for every element of the array. It can take three arguments:

    currentValue: The current element being processed in the array.
    index (optional): The index of the current element being processed in the array.
    array (optional): The array map was called upon.
    thisArg (optional): Value to use as this when executing the callback.
*/

/*

    Use cases of map

    1.Suppose you have an array of objects representing products, and you want to extract just the names of these products into a new array:
    2.Data Transformation: Imagine you have an array of temperature values in Celsius, and you want to convert them to Fahrenheit.
    3.Suppose you have an array of objects representing users, and you want to extract just their email addresses
*/


const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const res = mynums.map((num) => {
    return num += 10;
});
console.log(res);

// yehen pe v wo sali kahan i apply hoti hai jo filter  ke andar ke apply hoti hai

// now let's study chaining in js

/*
    Chaining in JavaScript refers to the practice of calling multiple methods 
    on an object or a result of a method call in a single statement. 
    This is commonly used with methods that return the object itself 
    (like array methods map, filter, reduce, etc.) or another object, 
    allowing you to perform multiple operations sequentially
*/

// let's see an example

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const outputarr = numbers
    .map((nums) => { return nums*10; })
    .map((nums) => { return nums+1; })
    .filter((nums) => {return nums > 41; });
    
console.log(outputarr);

// we chain more methods to it 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ REDUCE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// reduce method 

const myNums = [1,2,3,4,5,6,7,8,9,10]

/*
let initialValue = 0;

const finalValue = myNums.reduce( 
    (accumulator, currentValue) => accumulator + currentValue, initialValue )

console.log(finalValue);
*/


// Imagine a situation were you have a cart and there are some values in cart already and 
// sum of price is already there but next day in same cart the person added new product and 
// is now calculating the price of cart then reduce prototype of array will be used

// now to show it lets put initialValue as 67

let initialValue = 67;

const finalValue = myNums.reduce( 
    (accumulator, currentValue) => accumulator + currentValue, initialValue )

console.log(finalValue);

// prefix sum wala khela hai or kux nhi 

// readable code 

let initial = 90;
const finalval = myNums.reduce(function (acc, curr)  { return acc + curr} , 0)
console.log(finalval);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((total , course) => {return total + course.price}, 0)
console.log(priceToPay);