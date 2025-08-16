import { request } from '@playwright/test';
import {EndpointData,IUserListResponse,apiUrl} from '../data/endpointData';
const endpoint = EndpointData.testDataEndpoint;
const resetEndpoint = EndpointData.resetDatabaseEndpoint;
export async function getTestUsers(){
    let testUsers = await request.newContext({baseURL: apiUrl});
    return await testUsers.get(endpoint); 
}
export async function getTestUsersBody() {
    const response  = await getTestUsers();
    return (await response.json()) as IUserListResponse;

}
//re seeds the database, deleting old data and loading in new 
export async function resetDatabase() {
    let resetDb = await request.newContext({baseURL: apiUrl});
    return await resetDb.post(resetEndpoint); 
}
