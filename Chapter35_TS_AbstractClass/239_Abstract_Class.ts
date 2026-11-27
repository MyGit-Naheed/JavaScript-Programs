abstract class BaseTest{
    protected testName:string;
    constructor(testName:string){
        this.testName = testName;
    }
    abstract setup():void
    abstract execute():void
    abstract teardown():void
    abstract loan():void

    Loan1(): void{
        console.log("Loan Given Already!")
    }
}
class UITest extends BaseTest{
    setup(): void{
        console.log(" Setup: Launch Browser");
    }
    execute(): void{
        console.log(" Executable click buttons, fill forms")
    }
    teardown(): void{
        console.log(" Teardown: close browser");
    }
    loan(): void{
        console.log(" Loan: close browser");
    }
}