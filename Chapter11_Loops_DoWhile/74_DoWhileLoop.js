let retry = 0;

do {
    console.log("Executing the Code....");
    console.log("Retrying..............",retry, "Time")
    retry++
} while(retry<3){
    console.log("Done");
};


//it will run infinite times if you dont give retry++