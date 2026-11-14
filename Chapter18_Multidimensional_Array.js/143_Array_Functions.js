let scores =[
    [50,60,70],
    [60,70,80],
    [80,85,90]
];
//Matrix => Row =Cpl=>
    let rowSum =scores.map(row=>row.reduce((a,b)=>a+b));
console.log(rowSum);