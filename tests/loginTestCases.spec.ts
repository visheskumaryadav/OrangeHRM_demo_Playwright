import { expect } from '@playwright/test'
import { loginPageTest } from '../utils/customFixtures' //created custom fixture for loginpage
import { MenuItems } from '../utils/sideBarMenuItems';

/*
basically before starting the execution playwrite launch the custom fixture "loginPageTest" and "loginPage" fixture
has same method access like "page" fixture along with that it can access the "LoginPage" POM file class
*/
loginPageTest.describe("Verifying login functionality", () => {

    loginPageTest('verify user is able to login with blank field', async ({ loginPage }) => {
        // await page.goto("https://opensource-demo.orangehrmlive.com/")
        // let loginPage = new LoginPage(page);
        await loginPage.submit();
        let resultValidation = await loginPage.getValidationForEmptyField();
        expect(resultValidation.userName_validation).toMatch('Required');
        expect(resultValidation.password_validation).toMatch('Required');
    })
    loginPageTest('verify user is able to login with valid credentails', async ({ loginPage, sideBar }) => {
        // await page.goto("https://opensource-demo.orangehrmlive.com/")
        // let loginPage = new LoginPage(page);
        await loginPage.enterUsername("admin");
        await loginPage.enterPassword("admin123");
        await loginPage.submit();
        let actualTitle = await sideBar.getActiveMenu();
        expect(actualTitle).toContain(sideBar.menuText(MenuItems.Dashboard));
    })
})


