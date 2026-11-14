//For Resolve (Successfull)

let apiCall = new Promise(function(resolve,reject){
    resolve({status:200, body:"user data"});
});

apiCall.then(function(response){
    console.log(response);
});

//For Reject (Failure)

let testRun = new Promise(function(resolve,reject){
    reject("Assertion Failed!!");
});

testRun.then(function (data){//Resolve
    console.log(data);
}).catch(function(error){//Reject
    console.log(error);
})