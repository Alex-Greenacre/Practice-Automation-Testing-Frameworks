import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
export class LoginPage extends BasePage{
    private usernameField = this.page.locator("id=username");
    private usernameErrorText = this.page.locator("id=username-helper-text");
    
    private passwordField = this.page.locator("id=password");
    private passwordErrorText = this.page.locator("id=password-helper-text");
    
    private submitField = this.page.getByRole("button").filter({hasText:'Sign In'});
    

    async enterUsername(pUsername:string){
        this.usernameField.fill(pUsername);
    }
    async enterPassword(pPassword:string){
        this.passwordField.fill(pPassword);
    }

    async clickSubmit(){
        this.submitField.click();
    }

    async getUsernameErrorText(){
        return this.usernameErrorText.innerText();
    }
    async getPasswordErrorText(){
        return this.passwordErrorText.innerText();
    }

    async usernameErrorIsVisible(){
        return this.usernameErrorText.isVisible();
    }
    async passwordErrorIsVisible(){
        return this.passwordErrorText.isVisible();
    }
}