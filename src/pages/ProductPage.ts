import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class ProductPage extends BasePage{

    private readonly productHeader: Locator
    private readonly productImages: Locator
    private readonly productMetaData: Locator
    private readonly productPriceData: Locator
    private readonly productMap: Map<string, string | number>
    


    constructor(page:Page){
        super(page)
        this.productImages=page.locator('#content img')
        this.productHeader  = page.getByRole('heading',{level:1})
        this.productMetaData = page.locator('.col-sm-4 .list-unstyled:nth-of-type(1) li')
        this.productPriceData = page.locator('.col-sm-4 .list-unstyled:nth-of-type(2) li')
        this.productMap=new  Map<string, string | number>

    }

    async getProductHeader(): Promise<string>{

        return await this.productHeader.innerText()
    }

    async getProductImagesCount(): Promise<number>{
        return await this.productImages.count()
    }

    async getProductMetaData(): Promise<Map<string, string | number>>{
        

        this.productMap.set('productheader', await this.getProductHeader())
        this.productMap.set('prodimagecount',await this.getProductImagesCount())

        await this.getProductData();
        await this.getProductPriceData()
        return this.productMap

    }


    private async getProductData(): Promise<void>{
        let metaData=await this.productMetaData.allInnerTexts()
        for(let ele of metaData){
            let metaData=ele.split(':')
            let metaKey =metaData[0].trim()
            let metaValue =metaData[1].trim()
            this.productMap.set(metaKey,metaValue)

        }


    }

    private async getProductPriceData(): Promise<void>{
        let priceData=await this.productPriceData.allInnerTexts();
        let  productPrice=priceData[0].trim();
       let exTaxPrice = priceData[1].split(':')[1].trim();
        this.productMap.set('productprice',productPrice)
        this.productMap.set('exprice',exTaxPrice)
    }

}