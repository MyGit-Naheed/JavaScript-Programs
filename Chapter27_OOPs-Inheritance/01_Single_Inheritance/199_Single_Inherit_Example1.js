class BaseTest{
    constructor(){

    }
    setup(){
        console.log("BaseTest-Setup");
    }
    teardown(){
        console.log("BaseTest teardown");
    }
}
class UITest extends BaseTest{
    constructor(){
        super();
    }
    setup(){
        super.setup();
        console.log("UI Maximise Window");
    }
    teardown(){
        super.teardown();
        console.log("UI Taken screeshot");
    }
}
let test = new UITest();
test.setup();
test.teardown();