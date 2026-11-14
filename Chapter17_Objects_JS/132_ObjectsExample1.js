let a1 ={ name: "Ritesh"};
console.log(a1.name);

let a = {status : "pass"};
console.log(a.status);
console.log(a["status"]);

//keys are case sensitive
let a2  ={status: "pass",Status: "Fail"};
console.log(a2["status"]);
console.log(a2["Status"]);
