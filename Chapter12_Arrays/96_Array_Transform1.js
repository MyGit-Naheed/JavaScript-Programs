// Map and Filters, we already used in 89 item of Chapter12

//Every vs Some

// Every : Every elements should meet the condtion
console.log([60,70,80,90].every(s=>s>=60)); // rturns true

console.log([10,60,70,80].every(p=>p>50)); // returns false

// Some : Atleast ONE elements should meet the condtion
console.log([60,70,80,90].some(s=>s>=60)); // rturns true

console.log([10,60,70,80].some(p=>p<50)); // returns false