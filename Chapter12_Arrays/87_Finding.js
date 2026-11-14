let num =[10,30,45,50,55,60, 65];
let result =num.find(temp=> temp>45);
console.log(result);

//find Index
let index = num.findIndex(n=> n>50);
console.log(index);

//finding last element with condtion and last index
num.findLast(n=> n>20); //45
num.findLastIndex(n=> n>20);
