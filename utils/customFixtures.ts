import { test, expect } from '@playwright/test'
import { LoginPage } from '../page_objects_files/Login'
import { SideBarNavigation } from '../page_objects_files/SideBar_navigation'
type pageObjects = {
    loginPage: LoginPage,
    sideBar:SideBarNavigation,    
}
export const loginPageTest = test.extend<pageObjects>({
    loginPage: async ({ page }, use) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/")
        let loginPage = new LoginPage(page);
        await use(loginPage);
        page.close();
    },
    sideBar: async({page},use)=>{
        await use(new SideBarNavigation(page));
    }

})
