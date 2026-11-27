interface TestHook{
    (testName:string):void;
}
let beforeEachHook: TestHook = function(testName: string): void {
console.log("[AFTER] Tearing Down! "+testName);
}
let afterEachHook: TestHook=function (testName:string):void{
console.log("[AFTER] Tearing Down:"+testName);
}
beforeEachHook("Login Test");