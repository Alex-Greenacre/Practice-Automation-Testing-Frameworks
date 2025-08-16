import { Page } from "@playwright/test";
import { LoginPage } from "../page/loginPage";
export class PageManager{
    private _loginPage?: LoginPage;
    
    constructor(public page:Page){}

    //Creates pages with reference to the page managers page, allowing for context to be handled over each page 
    //get function used so all pages aren't created on page managers creation 
    getLoginPage():LoginPage{
        if(!this._loginPage){
            this._loginPage = new LoginPage(this.page);
        }
        return this._loginPage;
    }
}
