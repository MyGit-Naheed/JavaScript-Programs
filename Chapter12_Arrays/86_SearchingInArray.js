let results = ["pass","fail","promote","error","fail"];
results.indexOf("fail"); //1
results.indexOf("skip");//
//lastIndexOf - Searches from the end
results.lastIndexOf("fail");
results.lastIndexOf("error");

//Includes returns boolean
results.includes("error") // returns true
results.includes("Noerror"); // returns false