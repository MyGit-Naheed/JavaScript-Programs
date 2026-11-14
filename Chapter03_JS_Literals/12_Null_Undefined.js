/*
SIMPLE DEFINITIONS

undefined --> A variable exists, but it has not been assinged any value yet.
              Javascript itself sets this automatically

null       --> A variable exists, but the developer explicitly assign "no value" or empty
              it is intentionally absence of any value.

*/

//Undefined Example

//var x
// console.log(x);

//Null example
// var audi = null;
//console.log(audi);

//1. Undefined
//************************************* */

let userName; // declared but not assigned any value
console.log(userName);
console.log(typeof userName);

function great(){
    // no return statement
}
console.log(great());

let x;
x=10;
console.log(x);

//2. Null
let profilePic = null;
console.log(profilePic);
console.log(typeof profilePic);

// undefined
//Not assigned yet
//Javascript automatically undefined
//null == undefined --> true
//null === undefined --> false
//*************************************** */

// null
// Intentionallt empty
//Developer manually
//object (historical bug in JS)

