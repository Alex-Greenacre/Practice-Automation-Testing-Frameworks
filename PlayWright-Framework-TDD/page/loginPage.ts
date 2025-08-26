import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
export class LoginPage extends BasePage{
    
    private errorBox = this.page.locator('data-test=signin-error')
    
    private usernameField = this.page.locator('id=username');
    private usernameErrorText = this.page.locator("id=username-helper-text");
    
    private passwordField = this.page.locator('id=password');
    private passwordErrorText = this.page.locator("id=password-helper-text");
    
    private submitField = this.page.getByRole('button').filter({hasText:'Sign In'});

    private rememberMeCheck = this.page.locator('data-test=signin-remember-me');
//    private rememberMeText = this.page.getByRole('label').filter({hasText:'Sign In'});

    private createNewAccountLink = this.page.locator('data-test=signup');

    async enterUsername(pUsername:string){
        await this.usernameField.fill(pUsername);
    }
    async enterPassword(pPassword:string){
        await this.passwordField.fill(pPassword);
    }
    async clickPassword(){
        await this.passwordField.click();
    }
    async clickRememberMe(){
        await this.rememberMeCheck.click();
    }

    async clickSubmit(){
       await this.submitField.click();
    }
    async clickCreateNewAccount(){
       await this.createNewAccountLink.click(); 
    }
    async getErrorBoxText(){
        return this.errorBox.innerText();
    }
    async getUsernameErrorText(){
        return this.usernameErrorText.innerText();
    }
    async getPasswordErrorText(){
        return this.passwordErrorText.innerText();
    }
    async getRememberMeText(){
        return this.rememberMeCheck.innerText();
    }
    
    async getCreateNewAccountText(){
        return this.createNewAccountLink.innerText();
    }
    async errorBoxIsVisible(){
        return this.errorBox.isVisible();
    }
    async usernameErrorIsVisible(){
        return this.usernameErrorText.isVisible();
    }
    async passwordErrorIsVisible(){
        return this.passwordErrorText.isVisible();
    }
    async rememberMeIsChecked(){
        return this.rememberMeCheck.isChecked();
    }
    
}