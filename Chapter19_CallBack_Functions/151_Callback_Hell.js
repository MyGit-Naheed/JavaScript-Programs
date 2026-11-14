function openBrowser(callback){
    console.log("Opening the Browser!");
    setTimeout(function(){
        console.log("Step1-Browser Starting!...");
        callback();
    },500);
}

function goToLoginPage(callback){
        setTimeout(function(){
        console.log("Step2-Login Page!...");
        callback();
    },500);
}

function enterCredentials(callback){
        setTimeout(function(){
        console.log("Step3-EnterCredentials!...");
        callback();
    },500);
}

function clickLogin(callback){
        setTimeout(function(){
        console.log("Step4-Login button Clicked!...");
        callback();
    },500);
}

//THIS IS CALLBACK HELL
openBrowser(function(){
    goToLoginPage(function(){
        enterCredentials(function(){
            clickLogin(function(){
                console.login("Test Completed")
            })

        })
    })
})