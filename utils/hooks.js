const { beforeAll, afterAll, beforeEach, afterEach } = require('@playwright/test');

beforeAll(async () => {
    console.log('Before all tests');
});

afterAll(async () => {
    console.log('After all tests');
});

beforeEach(async ({ page }) => {
    console.log('Before each test');
    await page.goto('/');
});

afterEach(async ({ page }) => {
    console.log('After each test');
});

