interface BasePage{
    url:string;
    title:string;
}
interface LoginPage extends BasePage{
    userNameSelector:string;
    passwordSelector:string;
    loginButtonSelector:string;
}
interface FreeTrialPage extends BasePage{
    userNameSelector:string;
    submitButtonSelector:string;

}
const loginPage:LoginPage ={
    url:"/login",
    title:"login page",
    userNameSelector:"#username",
    passwordSelector:"#password",
    loginButtonSelector:"#login-btn"
}
let freeTrialPage: FreeTrialPage={
    url: "/free-trial",
    title: "Free Page",
    userNameSelector: "#username",
    submitButtonSelector: "#submit"
}
console.log("URL:",loginPage.url);
console.log("Title:",loginPage.title);
console.log("Username field:",loginPage.userNameSelector);