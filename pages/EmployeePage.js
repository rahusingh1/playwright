import { test, expect } from "@playwright/test";

const BasePage = require('./BasePage');

class EmployeePage extends BasePage {
    constructor(page) {
        super(page);
        this.pimHeader = page.locator('h6');
        this.addEmployeeButton = page.getByRole('link', { name: 'Add Employee' });
        this.firstNameField = page.getByPlaceholder('First Name');
        this.lastNameField = page.getByPlaceholder('Last Name');
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.personDetailsHeading = page.locator('(//h6[normalize-space()="Personal Details"])[1]');
    }

    async isAtPIM() {
        await this.pimHeader.isVisible();
    }

    async addEmployee(employeeData) {
        await this.addEmployeeButton.click();
        await this.firstNameField.fill(employeeData.firstName);
        await this.lastNameField.fill(employeeData.lastName);
        await this.saveButton.click();
    }

    async verifyAddedEmp(employeeData) {
        test.setTimeout(50000);
        const personHeadingText = await this.personDetailsHeading.textContent();
        console.log('Captured text: ', personHeadingText);
        expect(personHeadingText).toContain('Personal Details');

    }
}

module.exports = EmployeePage;
