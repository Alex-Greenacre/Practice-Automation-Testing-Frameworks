import { LoginPage } from "../page/loginPage";

export function getPageUrl(){
    var url = process.env.BASE_URL;
    if (!url && !process.env.API_URL){
        throw new Error('Error no api variable set');
    }
    return url; 
}
export const loginPageData = {
    loginPageTitle:'Cypress Real World App', 
    loginPageH1: 'Sign in',
    loginSubmitButtonText:'Sign In',
    errorBoxText:'Username or password is invalid',
    errorInvalidUsername:'Username is required',
    errorInvalidPassword:'Password must contain at least 4 characters',
    rememberMeText:'test' 
}