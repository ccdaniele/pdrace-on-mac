// tests/homepage.test.js
const { test, expect } = require('@playwright/test');

test.describe('pdrace-client', () => {
  // This test describes a suite of tests for the Next.js homepage.

  test.beforeEach(async ({ page }) => {
    // This runs before each test, navigating to the homepage.
    await page.goto('http://localhost:3002');
  });

  test('should have the correct title', async ({ page }) => {
    // Verify that the page title is correct.
    await expect(page).toHaveTitle('pdrace - home');
  });

  test('should display a navigation link', async ({ page }) => {
    // Check for the presence of a navigation link.
    const navLink = page.locator('nav a[href="/createplayer"]');
    await expect(navLink).toBeVisible();
  });

  test('should navigate to the about page', async ({ page }) => {
    // Test navigation to another page.
    const navLink = page.locator('nav a[href="/createplayer"]');
    await navLink.click();

    // Check that the URL is now /about and the text is correct.
    await expect(page).toHaveURL('http://localhost:3002/createplayer');
    const aboutHeading = page.locator('h1');
    await expect(aboutHeading).toHaveText('PodRace');
  });
});
