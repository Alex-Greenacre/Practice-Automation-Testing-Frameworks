import { Page } from "@playwright/test";
import { LoginPage } from "../page/loginPage";
export class PageManager{
    private loginPage?: LoginPage;
    
    constructor(public readonly page:Page){}

    //Creates pages with reference to the page managers page, allowing for context to be handled over each page 
    //get function used so all pages aren't created on page managers creation 
    getLoginPage():LoginPage{
        if(!this.loginPage){
            this.loginPage = new LoginPage(this.page);
        }
        return this.loginPage;
    }
}
