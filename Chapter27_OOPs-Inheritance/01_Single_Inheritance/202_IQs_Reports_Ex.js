class Report{
    generate(data){
        console.log("Raw Data:"+data);
    }
}
class HTMLReport extends Report{
    generate(data){
        console.log("<html><body>"+data+"</body></html>");
    }
}
class JSONReport extends Report{
    generate(data){
        console.log('{"Rport": "'+data+'"}');
    }
}
class TextReport extends Report{
    generate(data){
        console.log("====REPORT===\n"+data+"\n======");
    }
}
let reports = [new HTMLReport(),new JSONReport(), new TextReport()]
reports.forEach(function(r){
    r.generate("5 Tests Passed, 1 Failed");
    console.log("-----------------------");

});