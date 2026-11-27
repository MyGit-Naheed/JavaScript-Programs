class Person{
    //hide my variables
    #child1;
    #child2;
    constructor(name,child1,child2){
        this.name = name;
        this.#child1 = child1;
        this.#child2 = child2;

    }
    getChild(){
        return this.#child1;
    }
    setChild(change_name){
        this.#child1 = change_name;
    }
}
let p = new Person("Praveen","Naveen","Manjeet");
//console.log(p.#child1);
console.log(p.getChild());
p.setChild("Naveen Raja");
console.log(p.getChild());
