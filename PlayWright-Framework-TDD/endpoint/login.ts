import { request } from '@playwright/test';
import {EndpointData,apiUrl} from '../data/endpointData';
const endpoint = EndpointData.loginEndpoint;

export async function loginAsUser(username: any, password: any){
    const body = {'username':username,'password':password};
    let login = await request.newContext({baseURL: apiUrl});
    return await login.post(endpoint,{data:body}); 
}