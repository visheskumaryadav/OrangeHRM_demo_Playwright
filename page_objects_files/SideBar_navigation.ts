import type { Page, Locator } from '@playwright/test'
import { MenuItems } from '../utils/sideBarMenuItems';

export class SideBarNavigation {
    private sidePanelBody: Locator;
    // private sidePanelSearch:Locator;

    constructor(private readonly page: Page) {
        this.page = page;
        this.sidePanelBody = page.locator('.oxd-sidepanel-body')
    }

    async getActiveMenu() {
        return await this.sidePanelBody.locator('a.active').textContent();
    }
    async openMenu(menu: MenuItems) {
        let menuItems = this.sidePanelBody.locator('a');
        let count = await menuItems.count();
        for (let i = 0; i < count; i++) {
            if (await menuItems.nth(i).textContent() === menuText(menu)) {
                await menuItems.nth(i).click()
            }
        }
    }
    async searchMenu(menu: string) {

    }

    menuText(key: MenuItems) {
     switch (key) {
        case MenuItems.Admin: return "Admin";
        case MenuItems.PIM: return "PIM";
        case MenuItems.Leave: return "Leave";
        case MenuItems.Buzz: return "Buzz"
        case MenuItems.Claim: return "Claim"
        case MenuItems.Dashboard: return "Dashboard"
        case MenuItems.Maintenance: return "Maintenance"
        case MenuItems.Directory: return "Directory"
        case MenuItems.My_info: return "My Info"
        case MenuItems.Performance: return "Performance"
        case MenuItems.Recruitment: return "Recruitment"
        case MenuItems.Time: return "Time"
        default: return "Not Found";
    }
}
}