
function getApiUrl(){
    var url = process.env.API_URL;
    if (!url){
        throw new Error('Error no api variable set');
    }
    return url; 
}
export const apiUrl = getApiUrl(); 
//response body for the list of testUsers 
export interface IUserListResponse {results: any[]}

export const EndpointData = {
    loginEndpoint: '/login',
    usersEndpoint:'/users',
    testDataEndpoint:'/testData/users',
    resetDatabaseEndpoint:'/testData/seed'
}