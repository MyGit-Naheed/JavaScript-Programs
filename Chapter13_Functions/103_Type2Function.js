// TYPE 2 FUNCTION
// NO Parameters / Arguments with Return 

//Function Definition
function sayhello(){
    return "Hello Returned";
}

//Function Calling
let msg = sayhello();
console.log(msg);


// Console Vs Return
//console.log = print to terminal/devtools (side useEffect, for humans).
//return = send value back to caller (data flow, for code)

function addLog(a,b){
    console.log(a+b); // Only prints, returns nothing

}

function addReturn(a,b){
    return a+b;  // gives value back

}

let x=addLog(2,3); //prints something, x = undefined
let y=addReturn(2,3); //prints nothing y = 5;