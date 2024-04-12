import {expect, Locator, Page} from '@playwright/test'

export class BasePage{

    constructor(readonly page: Page){}

    //assert page title:
    async assertPageTitle(title: RegExp){ 
        await expect(this.page).toHaveTitle(title);
    }

    //assert image is visible:
    async assertImgIsVisible(selector: string, name: string){ 
        await expect(this.page.locator(selector).getByRole('img',{name: name})).toBeVisible();
    }

    //assert image src:
    async assertImgSrc(selector: string, name: string, src: string){
        expect(await this.page.locator(selector).getByRole('img',{name: name})
        .getAttribute('src')).toMatch(src);
    }

    //assert text:
    async assertText(selector: string, text: string){
        await expect(this.page.locator(selector).getByText(text)).toBeVisible();


        let test = this.page.locator("#navbar-logo").getByText("Est. 2022");
        console.log("++++++++++++" + await test.innerText());
    }
    //============================================================================

    


}

export default BasePage;