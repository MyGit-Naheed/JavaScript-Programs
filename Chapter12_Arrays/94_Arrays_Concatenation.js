//Concatenation
let a = [1,2];
let b = [3,4];
let c =a.concat(b);
console.log(c);

//Concatenation
let a1 = [1,2];
let b1 = [3,4];
let c1 = [5,6]
let d1 =a1.concat(b1).concat(c1);
console.log(d1);

//Spread (modern way_ - Concatenation.(...)
let arr =[...a,...b,...c1];
console.log(arr);