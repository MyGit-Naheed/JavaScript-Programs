// LET - Fn Scoped  ( LET is Sincere)
let b =20; // Global scope
console.log(b); // prints 10
//-------------------------
function printHello(){
    console.log("Hello Testing Academy");
    let b = 30; //Local Scope
    console.log(b); // prints 30
    if(true){
        let  b = 5;
        console.log(b) // Prints 5
    }
    console.log(b); // it prints 30.. thats is the difference in var & let
}
printHello();