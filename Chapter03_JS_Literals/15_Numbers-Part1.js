// INTEGER LITERALS

//Decimal ( base 10 ) //most common
let decimal = 42;
console.log("Decimal:", decimal);

// binary (Base 2) 0b or 0B//Binary number
let binary = 0b1010; //10 in decimal
console.log("BinaryNumber:",binary);

// Octal (base 8) 0o or 0O
let octal = 0o52; // 42 inn decimal
console.log("Octal",octal);

// Hexadecimal (base 16) 0x or 0x
let hexa = 0x2A; // 42 inn decimal
console.log("Hexadecimal",hexa);

// FLOATING POINT LITERALS
let float1=3.14;
let float2=-0.5;
let float3 = .5 //valid, but avaoid for readability
let float4 =5. // valid, but avoid for readability

//EXPONENTIAL NOTATIONS
let exp1 = 1.5e3; //1.5*10^3 = 1500
let exp2 = 1.5e-3;//1.5*10^-3=0.0015
let exp3 = 2E10; // 2*10^10=20000000000

console.log("Exponential 1.5e3:",exp1); //1500
console.log("Exponential 1.5e-3:",exp2);//0.0015
console.log("Exponential 2E10:",exp3);//20000000000