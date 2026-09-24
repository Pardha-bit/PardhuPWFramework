import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class SearchResultsPage extends BasePage{

    //Locators
    private readonly productImage: Locator
    

    //intialization

    constructor(page:Page){

        super(page)
        this.productImage=page.locator('.product-thumb')
        
   
    }

    async getProductImageCount(): Promise<number>{
        return await this.productImage.count()
    }

    async selectProduct(productName: string): Promise<void>{
        await this.page.getByRole('img', { name: productName }).first().click()
    }

    



}