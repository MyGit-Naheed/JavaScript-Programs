let original =[1,2,3];
let copy1 =[...original]; //original copied to copy1
console.log(original);
copy1.push(8,5);
console.log("Copy1 :",copy1);
console.log("Original:", original);

let copy2 = original.slice();
console.log(copy2);

let deep_copy = original;
deep_copy.push(6,5);
console.log(deep_copy);
console.log(original); // new array deep_copy updated the orignal array
