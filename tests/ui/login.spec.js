const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const loginData = require('../../data/loginData.json');

test.describe('Login Tests', () => {
    test('Login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        await loginPage.navigate('/');
        await loginPage.login(loginData.username, loginData.password);
        await expect(page).toHaveURL('/web/index.php/dashboard/index');
        await dashboardPage.isAtDashboard();

    });
});
