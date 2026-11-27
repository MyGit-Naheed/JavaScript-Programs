//Question 1
async function sayHello(){
    return "Hello, QA Master";
}
sayHello().then(function (msg){
    console.log(msg);

});

//Question 2
async function getStatus(){
    let status = await Promise.resolve(200);
    console.log("Status code::",status);

}
getStatus();

//Question 3
async function testFlow(){
    let step1 = await Promise.resolve("Opened Browser");
    console.log(step1);

    let step2 = await Promise.resolve("Clicked Login");
    console.log(step2);

    let step3 = await Promise.resolve("Verified Dashboard");
    console.log(step3);
}
testFlow();