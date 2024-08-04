const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const EmployeePage = require('../../pages/EmployeePage');
const loginData = require('../../data/loginData.json');
const employeeData = require('../../data/employeeData.json');

test.describe('Employee Tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate('/');
        await loginPage.login(loginData.username, loginData.password);
    });

    test('Add new employee', async ({ page }) => {
        const dashboardPage = new DashboardPage(page);
        const employeePage = new EmployeePage(page);

        await dashboardPage.navigateToEmployeeSection();
        await employeePage.isAtPIM();
        await employeePage.addEmployee(employeeData.employee);
        await employeePage.verifyAddedEmp(employeeData.employee);

        await console.log('Employee added successfully');
    });
});
