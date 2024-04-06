
const score = 400; // data type automatically detected 
console.log(score);

//But we can explicitly mention the DataType we 
const balance = new Number(100); // Here specifically Casted into Numebr
console.log(balance);

// Few Function protypes 
const num1 = 400;
console.log(typeof num1);

const str = num1.toString();
console.log("Converted to string : " + str);
console.log(typeof str);


// we can make precision value fixed to 1 or 2 or any number meaning the values after the decimal
// for that purpose use the function "toFixed()" and pass any numeric argument
console.log("The 2 precision value : " + num1.toFixed(2)); 


// Now the doubt you had was when we have Precision Function why are we using tofixed
// Because precision function does something differet
// Let me show you 

const val = 23.897
console.log("numeric value : " + val);
console.log("the value till precision of 3 "+ val.toPrecision(3)); // the output : It gave a round off value 23.9 for 23.897

// Let's try more of it 
const val1 = 123.897
console.log("Numeric value till 3 precision : " + val1.toPrecision(3)); // output: "124" for "123.897" it rounded off all value after 3rd value and incremented 123 to 124

// but if you take something like this : 12334.903
const val2 = 12232.0238
console.log(val2.toPrecision(3)); // output : 1.22e+4 and will be in String form and also be carefull while using precision function  


// Many time we face difficulties in counting the 0s in big numbers like billion and trillions 
// for that javaScript gave us a function "tolocalstring() ";
// by defalut this function will put commans accourding to us standards 
// But in you want it to be in Indian Standard type (en-IN) as argumen 
// eg : 

const MyBackBalance = 100000000000000;
console.log("My BankBalance is in USD : " + MyBackBalance.toLocaleString());
console.log("My BankBalance is INR : " + MyBackBalance.toLocaleString('en-IN'));

// More for competative programing

// Number.MAX_VALUE, Number.MIN_VALUE, Number.MAX_SAFE_INTEGER etc are there


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MATH ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 

console.log(Math);
console.log(Math.abs(-45)); // absolute value
console.log(Math.round(4.27)); // round off
console.log(Math.ceil(45.89)); // round off to smallest integer greater then the given number
console.log(Math.floor(4.9)); // floor value
console.log(Math.min(4,6,1,3,9,0)); // Min Value
console.log(Math.max(34,4,5,65,6)); // Max value


// when and where Math Library is used?
// And Where are we gonna use them mostly 

console.log(Math.random()); // Interestingly the value of Math.random will lie in between 0 and 1
console.log(Math.random() *10); 
console.log( (Math.random()*10) + 1); // minimum value to be 1

// trick that's what he said 

const max = 20;
const min = 10;
console.log(Math.random()); // But we want integer greater than minimum value 
console.log(Math.random()*(max-min+1)); // we want floor value here 
console.log(Math.floor(Math.random()*(max-min+1))); // it is smaller than Min value
console.log(Math.floor(Math.random()*(max-min+1))+min); // Now good
