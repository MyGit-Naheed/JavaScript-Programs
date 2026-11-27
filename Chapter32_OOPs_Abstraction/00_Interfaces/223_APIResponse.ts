// Interfaces used in API Testing

interface APIResponse{
    statusCode : number;
    body?: string;
    headers?: object;
    responseTime: number;
}

//GET --> BODY OPTIONALS
// POST --> iMPORTANT

const responseDataGET: APIResponse = {
    statusCode:200;
    responseTime: 200;
}
const responseDataPOST:APIResponse={
    statusCode:200,
    body:"{'name':'pramod'}",
    responseTime:200,
    headers :{}
}