const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const loginData = require('../../data/loginData.json');

test.describe('Performance Tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate('/');
        await loginPage.login(loginData.username, loginData.password);
    });

    test('Verify Performance Page', async ({ page }) => {
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.navigateToPerformanceSection();
        await expect(page.locator('(//h6[normalize-space()="Performance"])[1]')).toContainText('Performance');
    });
});
