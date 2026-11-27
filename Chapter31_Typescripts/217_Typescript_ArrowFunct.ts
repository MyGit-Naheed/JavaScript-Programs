// Arrow function annotations
const multiply = (a:number,b:number):number=>a*b;

//Object annotations
let user: {name:string;age:number}={
    name: "John",
    age:30
};
console.log(user.name);
console.log(user.age);
console.log(multiply(10, 5));

function sayHello(msg:string):void{
    console.log(msg);
}

//Template Literal
function greet(name: string):string{
    return 'Hello,${name}!';
    
}