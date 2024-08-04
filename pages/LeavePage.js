import { expect } from "@playwright/test";
const BasePage = require('./BasePage');

class LeavePage extends BasePage {
    constructor(page) {
        super(page);
        this.leaveListTab = page.locator('//a[normalize-space()="Leave List"]');
    
    }

    async isAtLeaveListScreen() {
        await expect(this.leaveListTab).toContainText('Leave List');
    }

}

module.exports = LeavePage;
