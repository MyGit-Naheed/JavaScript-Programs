// prompt works only in browser base, It works in Browser console, 


let num = prompt("Enter a number:");
num = Number(num);; // convers a string into number
if (num % 2 === 0){
    console.log(num + "is Even");
}
else{ 
    console.log(num + " is Odd");
}