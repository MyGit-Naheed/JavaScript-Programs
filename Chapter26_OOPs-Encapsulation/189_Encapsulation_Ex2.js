class Car{
    #engine;
    constructor(name, engineName){
        this.name = name;
        this.#engine = engineName;
    }
    setEngine(nameEngine){
        this.#engine= nameEngine;
    }
    getEngine(){
        return this.engine;
    }
}
let  tesla = new Car("Tesla EV", "V8Engine");
console.log(tesla);