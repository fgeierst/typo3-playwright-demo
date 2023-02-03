import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Home/);
});

test('no access when logged out', async ({ request }) => {
  const response = await request.get(`/restricted-area`);
  expect(response.status()).toBe(403);
});

test('frontend user login', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Username').fill('johndoe');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('/restricted-area');
  await expect(page.getByRole('heading')).toHaveText('Welcome to the Restricted Area!');
});
