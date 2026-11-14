let [a,b,...rest] =[10,20,30,40,550,60];
console.log(a);//10
console.log(b);//20
console.log(rest);// [30,40,550,60]


//In this below case, only third value will be updated

let [, , third] = [70,80,90];
console.log(third);
