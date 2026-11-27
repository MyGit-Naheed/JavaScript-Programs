interface TestConfig{
    browser:string;
    headless:boolean;
    baseURL:string;
    retries?:number;
    timeout?:number;
}

let localConfig:TestConfig={
    browser: "Chrome",
    headless:true,
    baseURL: "https://localhost:3000"
};

let ciConfig:TestConfig={
    browser: "Firefox",
    headless: false,
    timeout:10000,
    retries:3
}
console.log("CI:",ciConfig.browser,"| timeout:", ciConfig.timeout)
console.log("Local:",localConfig.browser,"| timeout:",localConfig.timeout)