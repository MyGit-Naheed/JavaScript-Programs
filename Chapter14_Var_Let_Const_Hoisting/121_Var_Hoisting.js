console.log(greeting);
var greeting = "Hello";
console.log(greeting);

//This will print as 
//undefined
//Hello

//Behind the scenes:
//var greeting;             --> hoisted with undefined
//console.log(greeting);    --> undefined
//greeting ="Hello";        --> assignment stays in place
//console.log(greeting);    --> "Hello"