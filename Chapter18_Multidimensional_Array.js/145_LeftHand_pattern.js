// n= 3
//To print this below pattern
//***
//**
//*

let n = 5
for(let i=n;i>=1;i--){
    for(let j=1;j<=i;j++){
    //    console.log("*");
        process.stdout.write("*");
    }
    console.log(" ");
}