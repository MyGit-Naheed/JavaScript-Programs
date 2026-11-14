console.log("" == 0); // true, "" coerced to Number
console.log("0" == 0); // true, 0 coerced to Number
console.log("" == "0"); // false, both strings

// fix it
console.log("" === 0); // false 
console.log("0" === 0); // false, 
console.log("" === "0"); // false,