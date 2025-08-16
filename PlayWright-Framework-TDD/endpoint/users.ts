import { request } from '@playwright/test';
import {EndpointData,apiUrl} from '../data/endpointData';
const endpoint = EndpointData.usersEndpoint;

export async function createUser(firstName:any, lastName:any, username: any, password: any,email:any,phoneNumber:any){
    const body = {
        'firstName':firstName,
        'lastName':lastName,
        'username':username,
        'password':password,
        'email':email,
        'phoneNumber':phoneNumber
    };
    let login = await request.newContext({baseURL: apiUrl});
    return await login.post(endpoint,{data:body}); 
}
export async function createUserWithBalance(firstName:any, lastName:any, username: any, password: any,email:any,phoneNumber:any,balance:any){
    const body = {
        'firstName':firstName,
        'lastName':lastName,
        'username':username,
        'password':password,
        'email':email,
        'phoneNumber':phoneNumber,
        'balance':balance
    };
    let login = await request.newContext({baseURL: apiUrl});
    return await login.post(endpoint,{data:body}); 
}
