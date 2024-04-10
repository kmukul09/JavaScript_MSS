
// IIFE : Immediately Invoked Function Expressions

// In some scenarios we write a function and we have to execute it immediately in that condition we use IIFE

function chai(){
    console.log("DB Connected");
}

// chai();

// Above is normal function but we want an IIFE
// Immediately execution so we pur paranthesis after the  function 

/*

function chai(){
    console.log("DB Connected");
}()

*/ // this is showing error 

// So Correct way t write an IIFE is enclose complete section in paranthesis 

// this is called Named IIFE
(function chai(){
    console.log("DB Connected");
})();

// Now this is a IIFE function 

// Let's create another IIFE using Arrow function 

// this is called simple IIFE
( ( name )=> {
    console.log(`DB Connected $(name )`);
})('Mukul');

// agr eske upr wale IIFE me agr semicolon nhi lgaya hain then yahan pe erroe hoga
// kyuki IIFE invoke toh ho gzayga but rukna kahan hai isko yhi ni pta
// for that purpose we need to use semicolon after IIFE function   



