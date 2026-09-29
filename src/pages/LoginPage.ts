import { Locator, Page } from "playwright/test";
import { BasePage } from "./BasePage";



export class LoginPage extends BasePage{

    // private locators

    private readonly emailAddress: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;
    private readonly forgottenPassword;
    private readonly loginError;

    // constructor of the page class : intialize the locators
    constructor(page: Page){
        super(page)
        this.emailAddress=page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password = page.getByLabel('Password');
        this.loginBtn=page.getByRole('button', { name: 'Login' })
        this.forgottenPassword=page.getByRole('link', { name: 'Forgotten Password' }).first()
        this.loginError=page.locator('.alert.alert-danger.alert-dismissible')
    }

    // public page actions / methods : encapsulation

    async goToLoginPage(): Promise<void>{
        await this.page.goto('opencart/index.php?route=account/login')
    }

    async getLoginPageTitle(): Promise<string>{
        return await this.page.title()
    }

    async isForgottenPasswordLinkExist(): Promise<boolean>{
        return await this.forgottenPassword.isVisible();
        
    }

    async doLogin(userName: string , password : string): Promise<void>{

        console.log(`UserName: ${userName}, Password: ${password}`);
        await this.emailAddress.fill(userName);
        await this.password.fill(password);
        await this.loginBtn.click();

    }

    async isLoginErrorExist(): Promise<boolean>{
        return await this.loginError.isVisible();
    }

}