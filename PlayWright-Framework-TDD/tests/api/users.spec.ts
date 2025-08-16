import { test, expect } from '@playwright/test';
import { resetDatabaseContext } from '../../hooks/afterHooks';
import { ValidUsers } from '../../data/userData';
import { createUser, createUserWithBalance } from '../../endpoint/users';
import { getTestUsersBody } from '../../endpoint/testData';
test.afterEach('Reset Users',async () => {
    resetDatabaseContext();
})

test('Can create a user',async() =>{
    const user = ValidUsers[0];
    const preTestUserAmount = (await getTestUsersBody()).results.length;
    var response = await createUser(user.FirstName,user.LastName,user.username,user.password,user.email,user.phoneNumber);
    await expect(response.ok()).toBeTruthy();
    await expect((await getTestUsersBody()).results.length).toBeGreaterThan(preTestUserAmount)

    })

test('Can create a user with a balance',async()=>{
    const user = ValidUsers[0];
    const preTestUserAmount = (await getTestUsersBody()).results.length;
    var response = await createUserWithBalance(user.FirstName,user.LastName,user.username,user.password,user.email,user.phoneNumber,user.balance);
    await expect(response.ok()).toBeTruthy();
    await expect((await getTestUsersBody()).results.length).toBeGreaterThan(preTestUserAmount)

    })
    
test('Cant create the same user twice ',async() =>{
    const user = ValidUsers[0];
    var response = await createUser(user.FirstName,user.LastName,user.username,user.password,user.email,user.phoneNumber);
    await expect(response.ok()).toBeTruthy();
    var response = await createUser(user.FirstName,user.LastName,user.username,user.password,user.email,user.phoneNumber);
    await expect(response.ok()).toBeFalsy();
  });
