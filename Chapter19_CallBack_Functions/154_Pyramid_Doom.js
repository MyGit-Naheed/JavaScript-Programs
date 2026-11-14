function step1(callback){
    console.log("Opening the Browser!");
    callback();
    
}
function step2(callback){
    console.log("Navgate to Page");
    callback();
    
}
function step3(callback){
    console.log("Enter Credentials");
    callback();
    
}
function step4(callback){
    console.log("Click Login Button");
    callback();
    
}
//THIS IS CALLBACK HELL
step1(function(){
    step2(function(){
            step3(function(){
                step4(function(){
                console.login("Test Completed");
            });

        });
    });
});