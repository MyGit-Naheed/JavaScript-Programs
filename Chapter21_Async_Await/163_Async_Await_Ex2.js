//function getTestResults(){
//    return "PASS";
//}

//getTesResults().then(function(results){
 //   console.log(results);
//})

async function testAPI(){
    try {
        let result = await Promise.reject("503 Service Unavailable");
        console.log(`Result`,result);
    } catch (error){
        console.log(`Error1`,error);
    } finally {
        console.log("Clean up!");
    }
}
testAPI();