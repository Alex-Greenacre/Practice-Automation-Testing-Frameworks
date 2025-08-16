import { test, expect } from '@playwright/test';
import {loginAsUser} from '../../endpoint/login';
import { ValidUsers,invalidUsersLoginIn } from '../../data/userData';
import { getTestUsersBody } from '../../endpoint/testData';
import {createUsers} from '../../hooks/beforeHooks'
import { resetDatabaseContext } from '../../hooks/afterHooks';

test.beforeAll('Create users for test',async()=>{
  const user = [ValidUsers[0]];
  createUsers(user);
})
test.afterAll('Clear all users', async()=>{
  resetDatabaseContext();
})

test('Can login as a user', async () => {
  const user = ValidUsers[0];
  const response = await loginAsUser( user.username,user.password);
  await expect(response.ok()).toBeTruthy();
});
test('Cant login with invalid details', async()=>{
  for (const user of invalidUsersLoginIn){
    const response = await loginAsUser(user.username,user.password);
    await expect(response.ok()).toBeFalsy();
  }
  invalidUsersLoginIn.forEach(async(user) => {
    const response = await loginAsUser(user.username,user.password);
  })
});
