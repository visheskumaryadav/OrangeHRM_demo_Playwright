import type { Page, Locator } from '@playwright/test'

export class LoginPage {
    userName: Locator;
    password: Locator;
    private submitBtn: Locator;
    private forgotPassword: Locator;

    constructor(private readonly page: Page) {
        this.page = page;
        this.userName = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.submitBtn = page.getByRole('button', { name: ' Login ' });
        this.forgotPassword = page.getByText('Forgot your password? ');
    }

    async enterUsername(username: string) {
        await this.userName.fill(username);
    }
    async enterPassword(password: string) {
        await this.password.fill(password);
    }
    async submit() {
        await this.submitBtn.click();
    }
    async getValidationForEmptyField() {
        let userName_validation = this.page.getByText('Required').first()
        let password_validation = this.page.getByText('Required').last();
        await userName_validation.waitFor();
        await password_validation.waitFor();
        return {
            userName_validation: await userName_validation.textContent(),
            password_validation: await password_validation.textContent()
        }

    }
    async getValidationForInvalidCredentails() {
        return await this.page.locator('.oxd-alert-content p').textContent();
    }
    async moveToForgotPassword() {
        await this.forgotPassword.click();
    }
    async getTile() {
        return await this.page.title();
    }
}