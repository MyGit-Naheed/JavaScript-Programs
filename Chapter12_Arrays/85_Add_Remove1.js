let browser = ['chrome','firefox','safari', 'opera','edge','IE'];
console.log(browser.length);

//Remove last elements
browser.pop();
console.log(browser);

//Removes first element
let removal = browser.shift();
console.log(removal);
console.log(browser);

for(let i=0;i<browser.length;i++){
console.log(browser[i]);
    if (browser[i] === "edge"){
        console.log("IE Does not Exist!");
    }
}