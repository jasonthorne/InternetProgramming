import {expect, Page} from '@playwright/test'

export class BasePage{

    constructor(readonly page: Page){}

    //assert page title:
    async assertPageTitle(title: string){ 
        await expect(this.page).toHaveTitle(title);
    }

    //assert image is visible:
    async assertImgIsVisible(selector: string, alt: string){ 
        await expect(this.page.locator(selector)
            .getByRole('img',{name: alt})).toBeVisible();
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
    async assertLinkHref(selector: string, name: string, href: string){
        expect(await this.page.locator(selector).getByRole('link',{name:name})
        .getAttribute('href')).toMatch(href);
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
    async assertBtnIsVisible(name: string){
        await expect(this.page.getByRole('button',{name: name})).toBeVisible();
    }
  
    //enter text into input field:
    async enterInputFieldText(selector: string, text: string){
        await this.page.locator(selector).fill(text);
    }

    //click target buton:
    async clickButton(selector: string, text: string){
        await this.page.locator(selector).getByRole('button',{name:text}).click();
    }

    //assert tooltip is visible:
    async assertTooltipIsVisible(text: string){
        await expect(this.page.getByRole('tooltip',{name:text})).toBeVisible();
    }

    //assert that text is hiiden on given width
    async assertTextIsHiddenOnViewportWidth(selector: string, text: string, width: number){
        const viewportSize: {width:number; height:number} = this.page.viewportSize();
        await this.page.setViewportSize({width:width, height:viewportSize.height});
        await expect(this.page.locator(selector).getByText(text)).toBeHidden();
        await this.page.setViewportSize({width:viewportSize.width, height:viewportSize.height});
    }
}

export default BasePage;