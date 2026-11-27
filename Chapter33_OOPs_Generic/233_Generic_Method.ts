function getString(name: string): string{
    return "Naheed";
}
getString("Naheed Akbar");
function getFirstResult<T>(result:T[]):T{
    return result[0]!; // Non null assertion operator
}
let firstNumber = getFirstResult<number>([200,300,500]);
let firstString= getFirstResult<string>(["Login","Signup","Cart"]);
let firstBoolean=getFirstResult<boolean>([true,false,true]);

console.log("First Code:", firstNumber);
console.log("First Test:", firstString);
console.log("First Test:", firstBoolean);