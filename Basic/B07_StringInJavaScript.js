const name = "Mukul"
const repoCount = 50

console.log( name + repoCount + " Value");

// outdated way old 

// Modern way is : String Interpolation 
// use Back-ticks because yahan pe ata hai String Interpolation

// eg: 
console.log(`My name is ${name} and my age is ${repoCount} and I am biggner`);

// Let's create object of String 

const gameName = new String('MukulMss') // Put this in console of the WebBrowser you will get the of all functions 

// Actually knowing all these string functions is mastring the string 
console.log(gameName[0]);
console.log(gameName.length);

const lowerCasestring = gameName.toLocaleLowerCase();
console.log(lowerCasestring);

const upperCaseString = gameName.toUpperCase();
console.log(upperCaseString);

//Substring Method 

const substring = gameName.substring(0, 7);
console.log(substring);

// to know char at any position or index
console.log(gameName.charAt(5)); // this will give you 5th index pe kon sa char hai 

// if you have a char and you want to know that what index this char is at 
// Then use the "Indexof()" function 

console.log(gameName.indexOf('l'));



// many time we have to break string in sevral parts so we need to know few mthods 

// we already learnt the concept of substring but let's see it once again 
// "substring" function needs two argument (starttingIndex , numebr of char you want)

const sampleSubstring = gameName.substring(1, 7);
console.log(sampleSubstring);

// Slicing of string : This process is similar to creating substring 
const newstring = "I am among idiots and i wanna get out asap";

// const newstring = "Iamamongidiotsandiwannagetoutasap";
console.log("Length of string is : " + newstring.length);

const slicidString = newstring.slice(1, 17);
console.log(slicidString);

// we can also use negative values in string slicing 
const sampstr1 = newstring.slice(5, -10);
console.log("Negetively Sliced strign is : "+sampstr1);

// If we put negative value in argument of sbustring it will say Negative value will be treated as 0
const slicidString2 = newstring.slice(-5, 17);
console.log("Negetively Sliced strign is : "+slicidString2);

// To remove unwanted extra spaces from start and end of a string we have a function 
// "trim()" 

const str1 = "   Hello World   ";
console.log("String is : "+str1);
console.log(str1.trim()); // extra spaces at the start and end of string got removed by trim function.

// if you wnant only start blankspaces gone then trimStart() is the function for the job
const str2 = "   Hello Wolrd   ";
console.log("String is : " + str2);
console.log("start Trimmed string is : " + str2.trimStart())


// if you wnant only start blankspaces gone then trimStart() is the function for the job
const str3 = "   Hello Wolrd   ";
console.log("String is : " + str3);
console.log("End Trimmed string is : " + str3.trimEnd())



// We also have a replace method which can replace any char or word in any string
// Lets deal with urls

const url = "https://Mukul.com/mukul%20Shandilya"

// Now in above url we want replace %20 with dash (-) for that we will use replace
// replace will take "what you need to repalce" and "what you want on that place"  

console.log(url.replace('%20', '-')); // replacement done

// if we want to check if any part of strin ( word ,portion , substring) exist in the string 
// for that we have include function, argument for this is the word ,portion , substring
// it will return boolean 
console.log(url.includes("Mukul")); // it exists 
console.log(url.includes("Thakur")); // this one doesnot


// Split is also a very usefull funciton and it can help usbreak the string 
// in other words split string like space , dash, hyphen etc..

console.log(newstring.split(' '));





 