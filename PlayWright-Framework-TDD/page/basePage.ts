import { Page } from "@playwright/test";
export class BasePage{
    constructor(protected page : Page){}
    //Review page access 
    async navigateTo(url:string){
        this.page.goto(url);
    }
    async getTitle(){
        return await this.page.title();
    }
    async getH1Header(){
        return await this.page.locator('h1').innerText();
    } 
    async clickBack(){
        return await this.page.goBack();
    }
    //used to remove focus from page objects such as fields 
    async clickH1Header(){
        return await this.page.locator('h1').click();
    }
} 