// we will talk about how can we make singleton object 
// constructor ki help se kaise declear kar skte hai 


// way 1 : 
const tinderUser = new Object();
// console.log(tinderUser);

// way 2:

const tinderUser1 = {};
// console.log(tinderUser1);

// we can see output is returning the empty object

// Now lets fill it in
tinderUser.id = "20BCS9309";
tinderUser.name = "Master Mind";
tinderUser.isloggedIn = false;

// console.log(tinderUser);


// Another purpose example probabily for some other app

const regualarUser = {
    email: "Satyam@gmail.com",
    fullName : {
        userFullName:{
            FirstName: "Satyam",
            LastName: "Deepu"
        },

        Title: "Kumar"
    }, 
    psp : 2324
}

// Now to access the nested object's key:value we use
console.log(regualarUser.fullName.userFullName.FirstName, regualarUser.fullName.userFullName.LastName);


// Similar to but not equal to array merging or concationation we have 
// Object merging or concatination 

// Let's see how it is done

const obj1 = { 1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d" };
const obj3 = {4:"e", 5:"f"};
const obj4 = {6:"g", 7:"h"};

// now we want to merge all these into one 
// for that purpose we have

const objf = {obj1, obj2, obj3}; 
//created an object and inserted all the object into that very object 
// ofcourse we dont want that so what we do now

// We will use Object.assign() and as argument we will pass an empty object
// then the source objects 
// we have to store that object in some new object as the object assing return a new object

const newObj = Object.assign({}, obj1, obj2, obj3, obj4);
// console.log(newObj);

// But we are not going to use this way 

// hum toh spread ka trika hi use krenge joki array me kia tha 
const newObject = {...obj1, ...obj2, ...obj3, ...obj4};
// console.log(newObject);

// One example use-case: When backend sends data, it sends in form of array of object
// eg:

const user = [
    {
        id:"233sdf",
        email:"xyz@gmail.com"
    },
    {
        id:"233sdf",
        email:"xyz@gmail.com"
    },
    {
        id:"233sdf",
        email:"xyz@gmail.com"
    },
    {
        id:"233sdf",
        email:"xyz@gmail.com"
    },
    {
        id:"233sdf",
        email:"xyz@gmail.com"
    },
]

// Now to access these we can loop over them
// simple way to access is : 

// console.log(user[1].email);
// console.log(user[1].id);


// Now let's come back to tinderUser
console.log(tinderUser);

// If you want to get all the keys of the object 
console.log(Object.keys(tinderUser));
// output :  [ 'id', 'name', 'isloggedIn' ]

// Focus on the return type : it is array 
// quite helpfull in production we can itracte over array an can use that data 


// Same way We can get values too
console.log(Object.values(tinderUser));
// output : values in array

// other Genral methods are also here like length 

// one rare but interesting method is entries
console.log(Object.entries(tinderUser));
// You will get array of entries in an array 



// to avoid crashing and before summoning the feature it is prefeered to check if that feature is present or not
// for that use method hasOwnProperty('NameOfProperty');
