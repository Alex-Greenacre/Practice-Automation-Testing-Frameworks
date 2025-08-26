import { test, expect } from '@playwright/test';
import { PageManager } from '../../managers/PageManager';
import { loginPageData } from '../../data/pageData';
import { invalidUsersLoginIn, ValidUsers } from '../../data/userData';
import { resetDatabaseContext } from '../../hooks/afterHooks';
import { createUsers } from '../../hooks/beforeHooks';
const user = ValidUsers[0];
const invalidUser = invalidUsersLoginIn[0];

test.beforeEach('Create users for test',async()=>{
  await createUsers([user]);
})

test.afterEach('Clear all users', async()=>{
  await resetDatabaseContext();
})

test('Navigate to login page', async ({ page }) => {
  const context = new PageManager(page)
  await context.page.goto('/');
  expect(await context.getLoginPage().getTitle()).toEqual(loginPageData.loginPageTitle);
  expect(await context.getLoginPage().getH1Header()).toEqual(loginPageData.loginPageH1);
});

test('Sign into account', async({page})=>{
  const context = new PageManager(page)
  await context.page.goto('/');
  await context.getLoginPage().enterUsername(user.username);
  await context.getLoginPage().enterPassword(user.password);
  await context.getLoginPage().clickSubmit();
  expect(await context.getLoginPage().getH1Header()).not.toEqual(loginPageData.loginPageH1);
});

test('Click remember sign in',async({page})=>{
  const context = new PageManager(page);
  await context.page.goto('/');
  //Allows username field to resize out of focus, fixes clicking issue on firefox and webkit 
  await context.getLoginPage().clickH1Header();
  expect (await context.getLoginPage().rememberMeIsChecked()).toBeFalsy();
  await context.getLoginPage().clickRememberMe();
  expect (await context.getLoginPage().rememberMeIsChecked()).toBeTruthy()
  //expect(await context.getLoginPage().getRememberMeText()).toEqual(loginPageData.rememberMeText);
});


test('Click create account',async({page})=>{
  const context = new PageManager(page);
  await context.page.goto('/');
  await context.getLoginPage().clickCreateNewAccount();
});

test('Error entering invalid sign in details', async({page})=>{
  const context = new PageManager(page);
  await context.page.goto('/');
  expect(await context.getLoginPage().errorBoxIsVisible()).toBeFalsy();  
  await context.getLoginPage().enterUsername(invalidUser.username);
  await context.getLoginPage().enterPassword(invalidUser.password);
  await context.getLoginPage().clickSubmit();
  expect(await context.getLoginPage().errorBoxIsVisible()).toBeTruthy();
  expect(await context.getLoginPage().getErrorBoxText()).toEqual(loginPageData.errorBoxText)  
});

test('Error entering an invalid username when signing in', async({page})=>{
  const context = new PageManager(page);
  await context.page.goto('/');
  expect(await context.getLoginPage().usernameErrorIsVisible()).toBeFalsy();  
  await context.getLoginPage().clickPassword();
  expect(await context.getLoginPage().usernameErrorIsVisible()).toBeTruthy();
  expect(await context.getLoginPage().getUsernameErrorText()).toEqual(loginPageData.errorInvalidUsername)  
});

test('Error entering an invalid password when signing in', async({page})=>{
  const context = new PageManager(page);
  await context.page.goto('/');
  expect(await context.getLoginPage().passwordErrorIsVisible()).toBeFalsy();
  //Enter one character   
  await context.getLoginPage().enterUsername(invalidUser.username);
  await context.getLoginPage().enterPassword(user.password[0]);
  await context.getLoginPage().clickH1Header();
  expect(await context.getLoginPage().passwordErrorIsVisible()).toBeTruthy();
  expect(await context.getLoginPage().getPasswordErrorText()).toEqual(loginPageData.errorInvalidPassword)  
});
