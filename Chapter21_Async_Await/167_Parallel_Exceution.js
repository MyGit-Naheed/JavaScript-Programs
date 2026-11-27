function apiCall(name){
    return new Promise(function(resolve){
        setTimeout(function(){
             resolve(name + " 200 oK Completed");
        },1000);
    });
}

async function parallelTest(){
    console.log("Starting of the Test")
    let start = Date.now();

    let [r1,r2,r3] = await Promise.all([
        apiCall("Auth Services"),
        apiCall("User Service"),
        apiCall("Payment Service")
    ]);

console.log(r1);
console.log(r2);
console.log(r3);
console.log("Time:~"+(Date.now()-start)+"ms");
}
parallelTest();