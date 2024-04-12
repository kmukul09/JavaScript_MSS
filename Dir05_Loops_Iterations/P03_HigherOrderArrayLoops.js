// We have more loops in Javascript but they mostly focused on Array

// cases when we get strings in array : ["","","",""]
// cases when we get objects int Array : [{},{},{},{}]

// for of loop :

const sampleArray = [1,2,3,4,5,6,7,8,9,10]

for(const element of sampleArray){
    console.log(`the ${element} is In the Array`);
}

// Nothing much just similar to for(auto x : arr) int cpp

// wo can do same with string 
const Greetings = "Hello World";
for(const greet of Greetings){
    if(greet == " "){
        continue;
    }else{
        console.log(`char is : ${greet}`);
    }
}

// Maps : Again very similar to cpp Stores key-Value pairs 
//      It is more like the ordere Map of cpp
//      keeps order in focus 
//      Primitive and Object both can be use as key and value
//      No Duplicate values are allowed 



const mpp = new Map();
mpp.set('IN', "India");
mpp.set('FR', "France");
mpp.set('CH', "chaina");
mpp.set('UK', "Uttra Khand");

// Can we loop mpp: Well let's see But answer is yes obviously 

for (const key of mpp){
    console.log(key);
}
// ye code to pura Map hi print kar deti hai 
// So to get map we need key and value and for that purpose we have to make changes in forof loop

for(const [key, value] of mpp){
    console.log(key + ":-" + value);
}

// let's see how forof Works in case of object


const myObj = {
    'game1' : 'NFS',
    'game2' : 'Pubg',
    'game3' : 'GTA',
    'Ghost' : 'Ben10'
}

/*
for (const [key , Value] of myObj){
    console.log(key + " : " + value);
}
*/

// Error in above and map itable nhi hai 
// So for is will not work wih for of loop 

// Solution for this is use of for in loop 

for(const game in myObj){
    console.log(game);
}

// Smartly we can get both key and value 

const Obj2 ={
    'py': "Python",
    'cpp' : "C++",
    'js' : "JavaScript",
    'Ruby' : "Ruby"
}

for( const shot in Obj2){
    console.log(`${shot} the value is : ${Obj2[shot]}`);
}

// what if we use for in loop in array 
const tempArr = ["Py", "RB", "Java", "cpp", "HTML", "XML"];

// now loop
for( const key in tempArr){
    // console.log(key);
}
// it gave output as index of the elements in array 

// so yahan v wahi object wala style 
for(const key in tempArr){
    // console.log(tempArr[key]);
}

// Can we use for in on maps ? : No because maps are not itratable 


// Foreach in js: A higher order loop

const tempArr1 = ["Py", "RB", "Java", "cpp", "HTML", "XML"];

// we can access the forEach function
// array.forEach (  we give a ("CallBack Function") fucntion as parameter )
// ye call back function kya hota hai : Just normal function but this function does not have a name

// function name() {} here remove the name and put just function(){}
// also pass 'any name for itrator'


tempArr1.forEach( function (item) {
    console.log(item);
} );



// now let's see how arrow function works just dont write "function" and 

tempArr1.forEach( (item) => {
    console.log(item)
})

