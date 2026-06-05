import { BasePage } from "./2b-method-overriding.js";
class LoginPage extends BasePage {
    constructor() {
        super();
    }
    performCommonTasks() {
        console.log("Perform common task in child class");
        super.performCommonTasks();
    }
}
const objLoginPage = new LoginPage();
objLoginPage.performCommonTasks();
objLoginPage.clickElement();
objLoginPage.enterText();
objLoginPage.findElement();
