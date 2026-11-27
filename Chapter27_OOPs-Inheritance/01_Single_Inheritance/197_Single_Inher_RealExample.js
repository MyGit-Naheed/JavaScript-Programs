class Animal{
    constructor(name){
        this.name = name;
    }
    eats(){
        console.log(this.name + " is Eating");
    }
    sleeps(){
        console.log(this.name + " is Sleeping");
    }
    foo(){
        console.log("Foo Called!");
    }
}
class dog extends Animal{
    constructor(name,breed){
        super(name); // it is used for parent constructor
        this.breed = breed;

    }
    bark(){
        super.foo();
        console.log(this.name, " is barking!");
    }
}
let doggy = new dog("Rex","Labrador");
doggy.eats();
doggy.sleeps();
doggy.bark();
console.log(doggy.breed);