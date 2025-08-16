import { request,expect } from '@playwright/test';
import {EndpointData,apiUrl} from '../data/endpointData';
import {resetDatabase } from '../endpoint/testData';
const endpoint = EndpointData.loginEndpoint;

//Resets the database deleting any added users 
export async function resetDatabaseContext(){
    const response = await resetDatabase();
    await expect(response.ok()).toBeTruthy();
    
}    




