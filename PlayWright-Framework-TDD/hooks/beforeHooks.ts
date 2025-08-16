import { expect } from '@playwright/test';
import {EndpointData} from '../data/endpointData';
import {createUser,createUserWithBalance} from '../endpoint/users';
const endpoint = EndpointData.loginEndpoint;

//Create users before tests 
export async function createUsers(users:any){
    for (const user of users){
        console.log('loop');
        if (!user.balance){
            const response =await createUser(user.FirstName,user.LastName,user.username,user.password,user.email,user.phoneNumber);
            await expect(response.ok()).toBeTruthy();
        }
        else {
            const response =await createUserWithBalance(user.FirstName,user.LastName,user.username,user.password,user.email,user.phoneNumber,user.balance);
            await expect(response.ok()).toBeTruthy();
        }
    }
}

