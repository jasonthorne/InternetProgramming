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
    async assertTextIsVisible(selector: string, text: string){
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

    //assert element is visible:
    async assertElementIsVisible(selector: string){
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async assertBackgroundImgUrl(selector: string, url: string){
        console.log("test1");
        let test = this.page.locator('#hero');//.getByRole('img',{name: name})).toBeVisible(); //background-image:
        //console.log(await test.get.getAttribute('background-image')..toString());
        const bgImgUrl1 = await test.evaluate((element: HTMLElement) =>
        window.getComputedStyle(element).getPropertyValue('background-image'));
        console.log("++++++++" + bgImgUrl1);

        /*expect(await this.page.locator('#hero')
        .evaluate((element) =>
            window.getComputedStyle(element).getPropertyValue('background-image')


        const element: Locator = await page.getByTestId('accept-button);
        const backgroundColor = await element.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
        });
        */

        const element: Locator = this.page.locator(selector);
        const bgImgUrl = await element.evaluate((element: HTMLElement)=>{
            return window.getComputedStyle(element).getPropertyValue('background-image');
        });

        expect(bgImgUrl).toContain(url);
        console.log("+++bgImgUrl+++++" + bgImgUrl);

       
       





        
        
        //.getAttribute('background-image').)//.toContain("https://lorem-ipsum-fc.web.app/img/pitch/pitch.jpg");

    }
   
    


}

export default BasePage;