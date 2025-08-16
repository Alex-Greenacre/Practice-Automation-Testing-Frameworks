import { test, expect } from '@playwright/test';
import { PageManager } from '../../managers/PageManager';
import { loginPageData } from '../../data/pageData';
import { ValidUsers } from '../../data/userData';
import { resetDatabaseContext } from '../../hooks/afterHooks';
test.afterAll('Clear all users', async()=>{
  resetDatabaseContext();
})

test('Navigate to login page', async ({ page }) => {
  const context = new PageManager(page)
  await context.page.goto('/');
  expect(await context.getLoginPage().getTitle()).toEqual(loginPageData.loginPageTitle);
  expect(await context.getLoginPage().getH1Header()).toEqual(loginPageData.loginPageH1);
});

test('Sign into account', async({page})=>{
  const user = ValidUsers[0];
  const context = new PageManager(page)
  await context.page.goto('/');
  context.getLoginPage().enterUsername(user.username);
  context.getLoginPage().enterPassword(user.password);
  await context.getLoginPage().clickSubmit();
  expect(await context.getLoginPage().getTitle()).not.toEqual(loginPageData.loginPageTitle);
});
