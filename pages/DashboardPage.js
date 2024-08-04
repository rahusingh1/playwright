const BasePage = require('./BasePage');

class DashboardPage extends BasePage {
    constructor(page) {
        super(page);
        this.dashboardHeader = page.locator('//h6[normalize-space()="Dashboard"]');
        this.pimLink = page.getByRole('link', { name: 'PIM' });
        this.leaveLink = page.getByRole('link', { name: 'Leave' });
        this.PerformanceLink = page.getByRole('link', { name: 'Performance' });
        
    }

    async isAtDashboard() {
        await this.dashboardHeader.isVisible();
    }

    async navigateToEmployeeSection() {
        await this.pimLink.click();
    }

    async navigateToLeaveSection() {
        await this.leaveLink.click();
    }

    async navigateToPerformanceSection() {
        await this.PerformanceLink.click();
    }
}

module.exports = DashboardPage;
