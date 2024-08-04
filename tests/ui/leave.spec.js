const { test } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const LeavePage = require('../../pages/LeavePage');
const loginData = require('../../data/loginData.json');

test.describe('Leave Tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate('/');
        await loginPage.login(loginData.username, loginData.password);
    });

    test('Verify Leave Page', async ({ page }) => {
        const dashboardPage = new DashboardPage(page);
        const leavePage = new LeavePage(page);
        await dashboardPage.navigateToLeaveSection();
        await leavePage.isAtLeaveListScreen();
        
    });
});
