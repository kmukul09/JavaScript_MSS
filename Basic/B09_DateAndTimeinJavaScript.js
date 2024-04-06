// Dates 
/*
let Mydate = new Date()
console.log(Mydate);  // output: tought to read 2024-04-06T13:21:19.916Z
console.log(Mydate.toString()); // Gives Day Month Date Year 24hr format time GMT
console.log(Mydate.toDateString()); // Gives just Day Month Date Year
console.log(Mydate.toISOString()); // similar to just executing the mydate
console.log(Mydate.toLocaleDateString()); // simple month/dare/ year format


const num = new Number(100); // Such type of variable declaration is of object data type
console.log(typeof num);

// Similarly for date and time  "mydate"
// it is also an object 
console.log(typeof Mydate); // date is an object 

// we can also create onr own date and time
*/

// let myCreatedDate = new Date( 2023, 0, 23); //fromat 1

// let myCreatedDate = new Date( 2023, 0, 23, 22, 3, 5,); // format 2

// let myCreatedDate = new Date( 2023, 0, 23, 22, 3, 5,); // format 3

//let myCreatedDate = new Date("2023-01-14"); // we don't follow this in India

let myCreatedDate = new Date( "01-01-2024"); // This is our Indian Format


//console.log(myCreatedDate); // tough to read that's why we studied functions
console.log(myCreatedDate.toLocaleString());
 

let myTimeStamp = Date.now();
console.log(myTimeStamp); // TimeStamp in mili second as output

console.log(myCreatedDate.getTime());
// if we want time to be in second then we do this 
console.log(Math.floor(Date.now()/1000));

// now dealing with date if we want to get the month only or date only 
// so let's create the date first 

let date1 = new Date();
console.log(date1.getDate());
console.log(date1.getMonth());
console.log(date1.getFullYear());

// for more customization we can use localString method
newDate.toLocaleString('default',{
    weekday : "long",
})