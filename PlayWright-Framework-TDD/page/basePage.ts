import { Page } from "@playwright/test";
export class BasePage{
    constructor(protected page : Page){}
    async getTitle(){
        return await this.page.title();
    }
    async getH1Header(){
        return await this.page.locator('h1').innerText();
    } 
    async clickBack(){
        return await this.page.goBack();
    }
} 