let actualStatus =200;
let expectedStatus = 201;
let testResult = actualStatus === expectedStatus?"PASS":"NO BOSS";
console.log(testResult);

let environment ="staging";
let baseUrl = environment === "prod"?
"https://api.example.com" : "https://staging-api.example.com";
console.log(baseUrl);