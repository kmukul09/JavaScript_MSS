
// For Documentation read MDN document of Array

const myArray = [0,1,2,3,4,5]; // Created an array
const myHeros = ["Shaktiman", "IronMan", "BatMan", 45, 89, 34] // an Array can have data of different type
console.log(myArray[3]);


// Another way to create an array 
const newArr = new Array(1,2,3,4,5)
console.log(newArr[3]);

// Few methods of array 
//push operation to insert element 
newArr.push(34);
console.log(newArr);

//Pop operation to remove an element
newArr.pop(34);
console.log(newArr);

// Unshift but prefer not to use it as it does the move operation in array
// Elements ko move krega and given element ko array ke start me add kar dega 
newArr.unshift(9); // add element at the begining of array by shifting all the elements
console.log(newArr);

newArr.shift(); // removes elements from begining of array 
console.log(newArr);

// few more operations in js and these are questions methos means we can ask question with help of these
console.log("If the array includes 9 in it : "+ newArr.includes(9)); // checks if element is present in array 
// type of result boolean 

/*
let stringarry = new Array("Inshan", "Manav", "Admi", "Manushya");
console.log("Data : "+stringarry.includes("Mukul"));
*/

// Index of: Gives indexof element Type = number, but if element is not present then -1
console.log(newArr.indexOf(4));


// Slice the array : It returns a section of array
const subArr = newArr.slice(1, 4); // from strat index to last-1 index  
console.log(subArr);

// Now we have "slice" and "splice"

// what is difference between them : 
/*

*/

// creat an array
let originalArr = new Array(1,2,3,4,5,6,7,8,9);
console.log("Original Array : " + originalArr);

const myarr1 = originalArr.slice(0, 5);
console.log("A : " + myarr1);
console.log("Original Array : " + originalArr);


const myarr2 = originalArr.splice(0, 5);
console.log("B : " + myarr2);
console.log("Original Array : " + originalArr);

/*
    The output for above is :-

    Original Array : 1,2,3,4,5,6,7,8,9

    // Here: slice of array was taken out till index 0 to 4th. Total 5 elements
    //       But does not impace the original array 

    A : 1,2,3,4,5
    Original Array : 1,2,3,4,5,6,7,8,9

    // Here: splice takes out the part of array for real and impacts the original array 
    //       As it removes that part from the original array
    B : 1,2,3,4,5
    Original Array : 6,7,8,9  // this is the remaining array 


*/















