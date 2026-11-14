// Accessing & Modifying

let statuses =["Pass","Fail","Detained"];
console.log(statuses[0]); // PASS
console.log(statuses[2]); // skip
console.log(statuses.at(-1)); // skip
console.log(statuses.at(-2)); //fail
console.log(statuses.at(-4)); //undefined

// Modify values (Arrays are mutable
statuses[1] ="Blocked";
console.log(statuses);

