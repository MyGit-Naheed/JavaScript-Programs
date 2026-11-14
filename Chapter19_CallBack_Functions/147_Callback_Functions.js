function placeOrder(item,callback){
    console.log("Placing an Order");
    console.log("Order Placed", item);
    callback();
}

//Callback Function
function CompleteOrderPrint(){
    console.log("Order Ready, Please pickup");
}

//First way of Calling
//placeOrder("Burger",CompleteOrderPrint);

//Second way of Calling
//placeOrder("Burger",function(){
//console.log("Order Ready!!!! Please pick it up");
//});

//Third way of Calling
placeOrder("Burger",()=>{
    console.log("Arrow Fn, I am also a funtion")
});

//example of callbak function
//test (`has title`,async ({page})=>{

//});