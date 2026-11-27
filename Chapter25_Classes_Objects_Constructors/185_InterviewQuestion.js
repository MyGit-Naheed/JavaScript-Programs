let a = 10;
class TestRunner{
    static totalTests = 0;
    static passCount = 0;
    constructor(name,passed){
        this.name = name;
        TestRunner.totalTests++;
        if(passed){
            TestRunner.passCount++;
        }
        console.log(a);
    }
    pramod_fn(){
        return this.name;
    }
    static summary(){
        return TestRunner.passCount+"/"+TestRunner.totalTests+"passed";
    }

}
new TestRunner("Login",true);
new TestRunner("Signup",false);
new TestRunner("Cart",true);
new TestRunner("Check",true);
console.log(TestRunner.summary());