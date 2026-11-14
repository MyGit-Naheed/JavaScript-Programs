let responseTime =850; // in ms
let sla = 1000; // in ms
let slaStatus = responseTime<=sla? "Within SLA" : "SLA breached";
console.log('Response: ${responseTime}ms - ${slaStatus}');

//Template Literal
console.log('what is the SLA time?- ${sla}');