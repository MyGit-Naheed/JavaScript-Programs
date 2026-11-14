let browser = "opera";
switch(browser)
{
    case "chrome":
    case "Brave":
    case "Edge":
    case "opera":
        console.log("Chromium Project!");
        break;
    case "firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple Project!");
        break;
    default:
        console.log("Not a valid browser");
}