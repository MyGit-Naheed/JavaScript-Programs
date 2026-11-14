let a = {status:"pass"};
let b = a; // Call by reference
b.status = "fail";
console.log(a.status);
