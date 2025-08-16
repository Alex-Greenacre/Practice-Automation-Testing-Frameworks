export function getPageUrl(){
    var url = process.env.BASE_URL;
    if (!url && !process.env.API_URL){
        throw new Error('Error no api variable set');
    }
    return url; 
}
