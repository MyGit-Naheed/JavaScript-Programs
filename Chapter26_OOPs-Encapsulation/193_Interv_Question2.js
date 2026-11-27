/*
class Bug{
    constructor(title,severity){
        this.title = title;
        this.severity= severity;
    }
    display(){
        console.log("["+this.severity+"]"+this.title);
    }
}
let b1 = new Bug("Login Crash","Critical");
let b2 = new Bug("Typo in footer","Low");
b1.display();
b2.display();*/

class Environment{
    constructor(name = "staging",port =3000){
        this.name = name;
        this.port = port;
    }
    getURL(){
        return "http;//"+this.name+":"+this.port;
    }
}
let env1=new Environment();
let env2=new Environment("Production",8080);
console.log(env1.getURL());
console.log(env2.getURL());
