// imagine we are working on a online shopping website 
// there we encountered a problem with cart
// cart mekitne saman dalega user yr fix nhi hain 
// but humko sum calculte kar ke rkhna hoga 
// SO yahan pe jo function us karenge wo function me parameters fined nhi hoga

// that's why we need to understand what to do in such situation

function calculateCartPrice(num1){
    return num1
}

// now calling function

// console.log(calculateCartPrice(354));
// but what if we pass one more argument 
// console.log(calculateCartPrice(234,23432));
//we can se only one output as 1st argument got printed but not other

// --->> now Remember the concept of spread operator
// we will use it in parameter to take as mauch input as possible


// Yes your intution { put array as parameter and pass the values as argument } is correct 
// and that's what we do actually 


function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(12, 13, 14, 15)); // output is an array of price values


// --->> Passing object as parameter in function 

// create an object 

let nfz = {
    name: "Mukul Shandilya",
    price: 456465
}

// now crate a function and give object as parameter
function objectDemo(anyObject){
    console.log(`UserName is ${anyObject.name} and price is ${anyObject.price}`);
}

// calling the function 

console.log(objectDemo(nfz));

// But sometimes problems occureif we made mistakes or updated names in object 
// we need to check using if else if the variables we using are actually available or not

// Now let's check when we give array as parameter then what happens

// create an array 
let smaplearr = [200, 400, 500, 600, 700]

// make a function and give array as parameter and see the effect
function arraydemo(anyArray){
    return anyArray[0];
}

console.log(arraydemo([12, 13,14, 15]));
console.log(arraydemo(smaplearr));
