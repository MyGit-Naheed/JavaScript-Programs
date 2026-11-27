class TestCase{
    #status = "not run";
    static #count = 0;
    constructor(name){
        this.name =name;
        TestCase.#count++;
    }
    run(pass){
        this.#status =pass ? "PASSED":"FAILED";
    }
    getStatus(){ return this.#status;}
    static getCount(){return TestCase.#count;}
    static setCount(v){
        TestCase.#count =v;
    }
}
const tc = new TestCase("Login");
tc.run(true);
console.log(tc.getStatus());
new TestCase("Login");
new TestCase("Login");
new TestCase("Login");
console.log(TestCase.getCount())