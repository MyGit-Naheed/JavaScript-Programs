// Primitive data types - call by value
//Primitive, number, string, boolean, null, undefined

let a = 10;
let b = a;
b=99;
console.log(a);
console.log(b);
console.log("-----------")
//Objects- the reference value is copied, so both variables point to the same value
let object1 ={val:10};
let object2=object1;
object2.val= 99;
console.log(object1.val);