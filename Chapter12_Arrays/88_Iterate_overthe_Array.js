let tests =["Login","Checkout","Search","CheckIn"];

for(let i=0;i <tests.length; i++){
   // const element = tests[i];
    console.log(i, tests[i]);
}
console.log("-------for of block below---------");
// for..of (cleanest for values)
for(let test of tests){
    console.log(test)//value
}
console.log("-------for Each block below---------");

//for each (no return value)
tests.forEach((test,i)=>{
    console.log('${i}:${test}');
});
console.log("-------index + values---------");
//entries() - index + value
for (let [i,test] of tests.entries()){
    console.log(i,test);
}

console.log("------------------------------------------");
let students = ["Senthil","Menthil","Swapnil","Anil","Sunil"];
for (let student in students){
    console.log(student,"-> ", students[student]);//index in

}
