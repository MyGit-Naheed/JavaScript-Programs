// 1. Call by reference: one object, two names
let a = {status : "pass"};
let b= a;
b.status = "fail";
console.log(a.status); // fail ( a changed too!)
console.log("****************************")
//2. Shallow copy(...spread); new object, but inner object is shared
let user1 = {name: "Pramod", address: {city: "Delhi"}};
let copyuser1 = {...user1};
copyuser1.name ="Amit";
copyuser1.address.city ="Mumbai";
console.log(copyuser1.name);  // Pramod not changed (name is safe)
console.log(copyuser1.address.city); // City is changed (Mumbai);

console.log("****************************")
//3. Deep copy (structuredClone): everything is new
let user2 ={name :"Ritesh", address:{city:"Delhi"}};
let copy2 = structuredClone(user2);
copy2.name ="Amit";
copy2.address.city="Mumbai";
console.log(user2.name);
console.log(user2.address.city);
console.log(copy2.name);
console.log(copy2.address.city);