let url = "https://app.vwo.com";
let status = "Pass";
let message = `Test completed in $(320)ms`;
console.log(message);

//single quotes
let a = `hello`;
// Double quotes
let b ="World";

//Template literals (backticks)-allows expression & multiline
let name1 ="Alice";
let msg =`Hello,${name1}!2+2=${2+2}`;
console.log(msg);

//Multiline
let report =
`Test:Login
Status:Pass
Duration:320ms`;

//Can also have
console.log(String(200));
String(true);//"true"
String(null);//"null"
String([1,2]);//"[1,2]"