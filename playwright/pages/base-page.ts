import {expect, Page} from '@playwright/test'

export class BasePage{

    constructor(readonly page: Page){}

    /*let test = this.page.locator("#navbar-logo").getByText("Est. 2022");
        console.log("++++++++++++" + await test.innerText());*/

    //assert page title:
    async assertPageTitle(title: string){ 
        await expect(this.page).toHaveTitle(title);
    }

    //assert image is visible:
    async assertImgIsVisible(selector: string, alt: string){ 
        await expect(this.page.locator(selector).getByRole('img',{name: alt})).toBeVisible();
    }

    //assert image src:
    async assertImgSrc(selector: string, alt: string, src: string){
        expect(await this.page.locator(selector).getByRole('img',{name: alt})
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

    //assert element is hidden:
    async assertElementIsHidden(selector: string){
        await expect(this.page.locator(selector)).toBeHidden();
    }

    //assert background image:
    async assertBackgroundImg(selector: string, src: string){
        const imgSrc: string = await this.page.locator(selector).evaluate((element: HTMLElement)=>{
            return window.getComputedStyle(element).getPropertyValue('background-image');
        });
        expect(imgSrc).toContain(src);
    }

    //assert button is visible:
    /*async assertBtnIsVisible(name: string){
        await expect(this.page.getByRole('button',{name: name})).toBeVisible();
    }*/
  
    async test(selector: string, loc1: string, loc2: string){
        console.log("+++++++++++++loc1 + loc2: " + loc1 + "\n" + loc2);

       // await expect(this.page.locator(selector).getByText(loc1)).toBeVisible();

        const mySelector = this.page.locator(selector);

        await expect(this.page.locator(selector).filter({hasText: loc1})
            .filter({hasText: loc2})).toBeVisible();

        /*const rowLocator = page.getByRole('listitem');

            await rowLocator
                .filter({ hasText: 'Mary' })
                .filter({ has: page.getByRole('button', { name: 'Say goodbye' }) })
                .screenshot({ path: 'screenshot.png' });
            */



        /*
           async assertTextIsVisible(selector: string, text: string){
            await expect(this.page.locator(selector).getByText(text)).toBeVisible();
        }*/

         /*let test = this.page.locator("#navbar-logo").getByText("Est. 2022");
        console.log("++++++++++++" + await test.innerText());*/


        

    }

    //enter text into input field:
    async enterInputFieldText(selector: string, text: string){
        await this.page.locator(selector).fill(text);
    }

    //click target buton:
    async clickButton(selector: string, btnText: string){
        await this.page.locator(selector).getByRole('button',{name: btnText}).click();
    }

    //assert tooltip is visible:
    async assertTooltipIsVisible(text: string){
        await expect(this.page.getByRole('tooltip',{name:text})).toBeVisible();
    }
}

export default BasePage;