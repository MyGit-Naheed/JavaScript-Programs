let testMatric = [
    ["Login","Pass",200],
    ["Checkout", "Fail",404],
    ["Search","Pass",180]
]

for(let i=0;i<testMatric.length;i++){
    for(let j=0;j<testMatric[i].length;j++){
        process.stdout.write(testMatric[i][j]+" ");
    }
    console.log("");
}