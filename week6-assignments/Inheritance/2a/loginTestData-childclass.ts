import { TestData } from "./testData-parentclass.js"

class LoginTestData extends TestData {
    enterUsername() {
        console.log("Enter username")
    }
    enterPassword() {
        console.log("Enter password")
    }
}

const objLoginTD = new LoginTestData()
objLoginTD.enterCredentials()
objLoginTD.enterUsername()
objLoginTD.enterPassword()
objLoginTD.navigateToHomePage()