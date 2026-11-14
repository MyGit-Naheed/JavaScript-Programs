let a =10;
console.log(a);
let x;

// Hot code
for (let a = 0; a<=100; a++){
    console.log("No.:",a);
    badCodeFn();
}

function badCodeFn(){
    console.log("Hello World");
}