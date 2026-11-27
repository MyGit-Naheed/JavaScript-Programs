// Mixin concept can help to perform multiple inheritance
//Mixin1: Adds logging ability

let LoggerMixin=function (Base){
    return class extends Base{
        log(msg){

        }
    }
}
let ScreentshotMixin = function(Base){
    return class extends Base{
        takeScreenshot(){
            console.log("[SCREENSHOT] captured");
        }
    };
};
//Base Class
class TestCase{
    constructor(name){
        this.name = name;
    }
    run(){
        console.log("Running: "+this.name);
    }
}
// Apply BOTH mixins
class SmartTest extends ScreentshotMixin(LoggerMixin(TestCase)){
    constructor(name){
        super(name);
    }
}
let t = new SmartTest("Login Flow");
t.run();
t.log("Test Started");
t.takeScreenshot();