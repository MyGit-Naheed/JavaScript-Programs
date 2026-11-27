interface Calculator{
    add(a:number,b:number):number;
    substract(a:number,b:number):number;
    multiply(a:number,b:number):number;
}
const calc: Calculator = {
    add:(a,b)=> a+b,
    substract:(a,b)=> a-b,
    multiply :(a,b)=>a*b,
}


console.log(calc.add(3,4));
console.log(calc.substract(3,4));
console.log(calc.multiply(3,4));
