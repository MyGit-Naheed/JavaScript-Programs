let arr = [1,2,3];
console.log(arr);

//Add to the End of the elements of an array
arr.push(4);
console.log(arr);

arr.push(5,6);
console.log(arr);

//To remove elements from the end
arr.pop();
console.log(arr);

//Add from the begining
arr.unshift(0);
console.log(arr);

//Remove from the begining
arr.shift();
console.log(arr);

//Now we have [1,2,3,4,5] in an array
//To remove specifc elements, we use splice
arr.splice(1,1);
console.log(arr);

//To insert an element in the array
arr.splice(2,0,99);
console.log(arr);

//To delete and replace at the same place
arr.splice(1,2,10,20);
console.log(arr);
