class TestRunner{
    static totalTests =0;
    static passCount = 0;
    constructor(name,passed){
        this.name = name;
        TestRunner.totalTests++;
        if(passed){
            TestRunner.passCount++;
        
        }
    }
}
let t1 = new TestRunner("LoginTest",true);
let t2 = new TestRunner("SignTest",false);
let t3 = new TestRunner("DashboardTest",true);
let t4 = new TestRunner("SupportTest",false);
console.log(TestRunner.totalTests);
console.log(TestRunner.passCount);
console.log(t1.name);
console.log(t2.name);
console.log(t3.name);
console.log(t4.name);