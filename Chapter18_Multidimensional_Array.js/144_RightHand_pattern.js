// n= 3
//To print this below pattern
//*
//**
//***

let n = 3
for(let i=0;i<3;i++){
    for(let j=0;j<=i;j++){
    //    console.log("*");
        process.stdout.write("*");
    }
    console.log(" ");
}