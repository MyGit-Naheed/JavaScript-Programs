enum Browser{
    Chrome = "chrome",
    Firefox = "firefox",
    Safari ="safari",
    Edge="edge"
}
function launchBrowser(browser:Browser): void{
    switch (browser){
        case Browser.Chrome:
            console.log("Launching Chromium(Chrome V120)");
            break;
        case Browser.Firefox:
            console.log("Launching Firefox(Firefox V110)");
            break;
        case Browser.Safari:
            console.log("Launching Safari(Safari V112)");
            break;
        case Browser.Edge:
            console.log("Launching Edge(Edge V112)");
            break;
    }
}
launchBrowser(Browser.Chrome);
