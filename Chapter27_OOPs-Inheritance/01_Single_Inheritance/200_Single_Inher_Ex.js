class TestCase{
    execute(){
        console.log("Running Generic Testcase");
    }
}
class UnitTest extends TestCase{
    execute(){
        console.log("Running Unit Test-Checking one Function");
    }
}
class APITest extends TestCase{
    execute(){
        console.log("Running APITest - sending HTTP request");
    }
}
class E2ETest extends TestCase{
    execute(){
        console.log("Running E2ETest - Opening Browser");
    }
}
let tests = [new UnitTest(), new APITest(), new E2ETest()];
tests.forEach(function(test){
    test.execute();
});