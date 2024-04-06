// -->> Normal Comparision 
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// But problem occurs when we compare different data type element or terms 
// These often give unpredictable result 
// So it is adviced to use variables of same data type

// --> confusion will be there 
console.log("2" > 1);   //javascript autometically converted "2" into number
console.log("02" > 1);  // Same here So both will be true hence output will be true

// -->> Always Confused because equality and comparision both behve different  
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // ture but why  

// the reason is that an equality check == and comparision > < >= <= works
// differently. Comparisions converts null to a number, treating it as 0.
// that's why (3) null >= 0 is true and (1) null > 0 is false;

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 
// this is strict check even looks for data type match 
console.log("2" === 2);



