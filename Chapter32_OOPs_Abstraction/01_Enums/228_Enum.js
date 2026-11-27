var TestStatus;
(function (TestStatus) {
    TestStatus["Pass"] = "PASS";
    TestStatus["Fail"] = "FAIL";
    TestStatus["Skip"] = "SKIP";
    TestStatus["Pending"] = "PENDING";
    TestStatus["Blocked"] = "BLOCKED";
})(TestStatus || (TestStatus = {}));
console.log(TestStatus.Pass);
console.log(TestStatus.Fail);
console.log(TestStatus.Skip);
console.log(TestStatus.Pending);
console.log(TestStatus.Blocked);
