// Now we are talking about those conditions where it is assumed that Something is true
// We dont't check or compare but just assume tha it is true

// const UserEmail = "Mikhail@lola.in";
//const UserEmail = []  // yahan v chl ja rha hai 
const UserEmail = "";

if(UserEmail){  // yahan pe hum check nhi kar the useremail ko just wo value hai or hum usko true man rhe hai 
    console.log("Got the user email");
}else{
    console.log("Don't have user email")
}


// ya ho kya rha hai : string dalo , empty array dalo toh true man rha hai lekin empty string dalo toh false;

// ayse kux v man leta hai kya ye 

// --->> we have few truthy value and few falsy value

// Falsy Value : false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy value : 
/*
    1. "0" : string ke andar 0 hai toh wo truthy value hoga 
    2. 'False' : String ke andar likhi value hai so truthy hoga 
    3. " " : String ke andar space v ek truthy value hai 
    4. [] : Empty array 
    5. {} : Empty object 
    6. function(){}: empty function 


*/

// How to check if Array is empty 

const ProtoArray = [];

if(ProtoArray.length === 0){
    console.log("Empty");
}

// object ko kaise check krenge 

const obj1 = {}
if((Object.keys(obj1)).length === 0){
    console.log("Object ke sare keys ka humne array bnaya and then uski langth check kar li ");
}

// Object ke sare keys ka humne array bnaya and then uski langth check kar li 

// On console
// 1. false == 0 : true
// 2. flase == '' : true
// 3. 0 == '' : true


// Other than logical && , ||, ! 
// we  have a Nullish coalescing Operator (??) : focuses on NULL and undefined only

val1 = 5 ?? 10;
console.log(val1); 

// Kya fayda use krne ka jab first value hi lega 

// Fayda : 
val2 = null ?? 10;
console.log(val2);

// Ab Smjha : situation ke hisab se kya hai wo dal do wrna dusra wala dal do 
            // upr me 10 

val2 = undefined ?? 15;
console.log(val2);

// ye basically fallback ki trh hai ag error ay toh kis trh handle krne value assign krna chahe toh wo kis trh assign ho 


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
