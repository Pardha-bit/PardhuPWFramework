import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class HomePage extends BasePage{

    // Locatorss
    private readonly logoutLink: Locator;
    private readonly headers: Locator;
    private readonly searchBox: Locator;
    private readonly searchIcon: Locator;

    // initialize the locators
    constructor(page: Page){
        super(page)
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.headers = page.getByRole('heading',{level:2});
        this.searchBox= page.getByRole('textbox', { name: 'Search' })
        this.searchIcon = page.locator('.input-group-btn')

    }

    //methods

    async homePageTitle(): Promise<string>{
       return  await this.page.title()
    }

    async isLogOutLinkExist(): Promise<boolean>{

        return await this.logoutLink.isVisible()

    }

    async getHeadersLink(): Promise<string[]>{
       return await this.headers.allInnerTexts()
    }

    async doSearch(searchKey: string): Promise<void>{
        await this.searchBox.fill(searchKey);
        await this.searchIcon.click();
    }


}