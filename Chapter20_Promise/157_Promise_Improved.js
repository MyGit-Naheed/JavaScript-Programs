function openBrowser(){
    return new Promise(function(resolve){
        resolve("Browser has been Opened!");
    })
}

function goToLoginPage(){
        return new Promise(function(resolve){
        resolve("Navigate to Login Page");
    })
}

function enterCredentials(callback){
        return new Promise(function(resolve){
        resolve("Enter Credentials");
    })
}

function clickLogin(callback){
        return new Promise(function(resolve){
        resolve("Click Login Button");
    })
}


openBrowser(function(msg){
    console.log("Step 1",msg);
    return goToLoginPage();
}).then(function(msg){
    console.log("Step 2",msg);
    return enterCredentials();
}).then(function(msg){
    console.log("Step 3",msg);
    return clickLogin
}).then(function(msg){
    console.log("Step 4",msg);
}).catch(function(error){
    console.log("Error:",error);
}).finally(function(){
    console.log("Done Execution!");
});