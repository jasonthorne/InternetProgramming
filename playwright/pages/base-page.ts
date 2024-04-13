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

    //assert text is visible:
    async assertTextisVisible(selector: string, text: string){
        await expect(this.page.locator(selector).getByText(text)).toBeVisible();
    }

     //assert link href:
    /*async assertLinkHref(selector: string, name: string, href: string){
        expect(await this.page.locator(selector).getByRole('link',{name:name})
        .getAttribute('href')).toMatch(href);
    
        //expect(await this.page.locator(selector).getByRole('img',{name: name})
        //.getAttribute('src')).toMatch(src);
    
    }*/

    //assert url is valid:
    async assertLinkUrl(selector: string, name: string, url: string){
        await this.page.locator(selector).getByRole('link',{name:name}).click();
        await expect(this.page).toHaveURL(new RegExp(`/${url}$`));
    }

    async test1(){
        console.log("test1");
    }
   
    


}

export default BasePage;