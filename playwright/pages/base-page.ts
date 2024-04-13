import {expect, Locator, Page} from '@playwright/test'

export class BasePage{

    constructor(readonly page: Page){}

    /*let test = this.page.locator("#navbar-logo").getByText("Est. 2022");
        console.log("++++++++++++" + await test.innerText());*/

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
    }

    async test1(test1: string, test2: string){
        console.log("test1:" + test1);
        console.log("test2:" + test2);

        await this.page.locator(test1).getByRole('link',{name:'News'}).click();
        //aka getByRole('link', { name: 'News' })
        await expect(this.page).toHaveURL(test2);

    }

    async test2(){
        console.log("test2");
    }
   
    


}

export default BasePage;