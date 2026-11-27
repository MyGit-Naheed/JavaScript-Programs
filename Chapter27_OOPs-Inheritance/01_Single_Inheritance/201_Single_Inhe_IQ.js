class BasePage{
    verify(){
        console.log("Verifying Base Page");
    }
}
class LoginPage extends BasePage{
    verify(){
        console.log("Verify: UserName field Exists");
        console.log("Verify: Password field exists");
        console.log("Verify: Login button is visible");
    }
}
class DashboardPage extends BasePage{
    verify(){
        console.log("Verify: Welcome message shown");
        console.log("Verify: Sidebar menu loaded");
    }
}
class CartPage extends BasePage{
    verify(){
        console.log("Verify: cart items displayed");
        console.log(": Total price is correct");
    }
}
let pages =[new LoginPage(), new DashboardPage(), new CartPage()]
pages.forEach(function(page){
    page.verify();
    console.log("---");
});