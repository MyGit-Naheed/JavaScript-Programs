class Browser{
    constructor(name){
        this.name = name;
        this.isOpen = true;
        console.log(name + " Launched");

    }
    startBrowser(){
        console.log("Starting the Browser")
    }
    closeBrowser(){
        console.log("Starting of the Browser")
    }
}
let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");
chrome.closeBrowser();
chrome.startBrowser();