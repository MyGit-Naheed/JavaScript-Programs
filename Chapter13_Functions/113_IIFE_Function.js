// Immediately invoked Expression (IIFE)
// They donot need to be called.

function name1(){
console.log("Hello");
}
name1();

//calling self
(function(){
    console.log("Me Anonymous Function");
})();

(function(){
    console.log("Me on Staging");
})();

//Without using function name
(()=>{
    console.log("Arrow Function");
})();

