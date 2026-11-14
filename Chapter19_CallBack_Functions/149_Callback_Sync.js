let testResults =["Pass","Fail","Promoted","Skip"];
testResults.forEach(function(result,index){
    console.log("Test",index,result);
});

//"All done" prints LAST because foreach is synchronous.It finishes all four iterations and then moves next.
