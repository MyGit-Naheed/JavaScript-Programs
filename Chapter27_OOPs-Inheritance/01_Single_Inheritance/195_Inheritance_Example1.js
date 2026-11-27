class Father{
    eat(){
        console.log("Father Eating");
         }
}
class Son extends Father{
    walk(){
        console.log("Son Walks");

    }
}
const s = new Son();
s.walk();
s.eat();
const f = new Father();
f.eat(); //Allowed
//f.walk(); //Not allowed
