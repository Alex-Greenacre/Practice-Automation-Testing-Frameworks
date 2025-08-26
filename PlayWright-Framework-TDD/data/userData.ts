export const ValidUsers = [
    {
        'FirstName':"Test",
        'LastName':"Testa",
        'username':"TestUserOne",
        'password':"Test!",
        'email':"test@test.com",
        'phoneNumber':"0123456789",
        'balance':10
    },


];


export const invalidUsersLoginIn = [
    { 
        'username':"NoUserCreated",
        'password':"NoValidUser",
    },
    {    
        'username':"TestUserOne",
        'password':"",
    },
    {    
        'username':"",
        'password':"Test!",
    }
]
export const invalidUsersCreateUser = []