// Grand Father --> Father --> Son
class BasePage{
    constructor(name){
        this.name = name;
    }
    open(){
        console.log("[OPEN from BasePage]"+this.name);
    }
}
class AuthPage extends BasePage{
    login(user){
        console.log(" LOGIN from AuthPage"+ user);
    }
}
class AdminPage extends AuthPage{
    constructor(){
        super("Admin Panel")
    }
    manageUsers(){
        console.log("[ADMIN] Managing Users");
    }
}
let admin = new AdminPage();
admin.open();
admin.login("SuperAdmin");
admin.manageUsers();