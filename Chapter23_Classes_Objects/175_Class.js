class Person{
    //Attributes|Instance Variables|Data Members|Properties
    #name;
    #age;
    #rollNo;
    #phoneNo;
// Constructor, Attributes, Behaviour - CAB
// Constructor
// **A special function that runs automatically
//once, at the moment an object is born.**
constructor(){
    console.log("I am being called, whenever Object being created...")
}
    //Behaviour|Methods|Member Functions
    eat(){}  //we are not using function key in a class for the f(n)
    sleep(){}
    work(){}
}//CAB -> Class has the Attributes & Behaviour

let pramod = new Person();
//Object -> new Person();
//Object Ref - > pramod

let amit = new Person();
