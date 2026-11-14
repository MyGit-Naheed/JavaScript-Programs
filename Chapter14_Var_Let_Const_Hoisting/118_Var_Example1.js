// VARIABLE - Fn Scoped  ( variable is a cheater)
var a =10;
console.log(a); // prints 10
//-------------------------
function printHello(){
    console.log("Hello Testing Academy");
    var a = 20;
    console.log(a);
    if(true){
        var a = 30;
        console.log(a) // Prints 30
    }
    console.log(a); // it should be 20, but prints 30.. thats is the difference in var
}
printHello();