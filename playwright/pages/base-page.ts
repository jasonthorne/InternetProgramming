import {expect, Page} from '@playwright/test'

export abstract class BasePage{

    constructor(readonly page: Page){}

    //assert page title:
    async assertPageTitle(title: string){
        try{
            await expect(this.page).toHaveTitle(title);
        }catch(error){
            console.log(`Error asserting page title: ${title}`);
            throw error;
        }
    }

    //assert image is visible:
    async assertImgIsVisible(selector: string, alt: string){ 
        try{
            await expect(this.page.locator(selector)
                .getByRole('img',{name: alt})).toBeVisible();
        }catch(error){
            console.log(`Error asserting image: ${alt} is visible`);
            throw error;
        }
    }

    //assert image src:
    async assertImgSrc(selector: string, alt: string, src: string){
        try{
            expect(await this.page.locator(selector).getByRole('img',{name: alt})
                .getAttribute('src')).toMatch(src);
        }catch(error){
            console.log(`Error asserting image src: ${src}`);
            throw error;
        }
    }

    //assert text is visible:
    async assertTextIsVisible(selector: string, text: string){
        try{
            await expect(this.page.locator(selector).getByText(text)).toBeVisible();
        }catch(error){
            console.log(`Error asserting text: ${text} is visible`);
            throw error;
        }
    }

     //assert link href:
    async assertLinkHref(selector: string, name: string, href: string){
        try{
            expect(await this.page.locator(selector).getByRole('link',{name:name})
            .getAttribute('href')).toMatch(href);
        }catch(error){
            console.log(`Error asserting link href: ${href}`);
            throw error;
        }
    }

    //assert element is visible:
    async assertElementIsVisible(selector: string){
        try{
            await expect(this.page.locator(selector)).toBeVisible();
        }catch(error){
            console.log(`Error asserting element: ${selector} is visible`);
            throw error;
        }
    }

    //assert element is hidden:
    async assertElementIsHidden(selector: string){
        try{
            await expect(this.page.locator(selector)).toBeHidden();
        }catch(error){
            console.log(`Error asserting element: ${selector} is hidden`);
            throw error;
        }
    }

    //assert background image:
    async assertBackgroundImg(selector: string, src: string){
        try{
            const imgSrc: string = await this.page.locator(selector).evaluate((element: HTMLElement)=>{
                return window.getComputedStyle(element).getPropertyValue('background-image');
            });
            expect(imgSrc).toContain(src);
        }catch(error){
            console.log(`Error asserting background image: ${src}`);
            throw error;
        }
    }

    //assert button is visible:
    async assertBtnIsVisible(name: string){
        try{
            await expect(this.page.getByRole('button',{name: name})).toBeVisible();
        }catch(error){
            console.log(`Error asserting button: ${name} is visible`);
            throw error;
        }
    }
  
    //enter text into input field:
    async enterInputFieldText(selector: string, text: string){
        try{
            await this.page.locator(selector).fill(text);
        }catch(error){
            console.log(`Error entering text into input field: ${selector}`);
            throw error;
        }
    }

    //click target buton:
    async clickButton(selector: string, text: string){
        try{
            await this.page.locator(selector).getByRole('button',{name:text}).click();
        }catch(error){
            console.log(`Error clicking button: ${text}`);
            throw error;
        }
    }

    //assert tooltip is visible:
    async assertTooltipIsVisible(text: string){
        try{
            await expect(this.page.getByRole('tooltip',{name:text})).toBeVisible();
        }catch(error){
            console.log(`Error asserting tooltip: ${text} is visible`);
            throw error;
        }
    }

    //assert that text is hidden on given width
    async assertTextIsHiddenOnViewportWidth(selector: string, text: string, width: number){
        try{
            const viewportSize: {width:number; height:number} = this.page.viewportSize();
            await this.page.setViewportSize({width:width, height:viewportSize.height});
            await expect(this.page.locator(selector).getByText(text)).toBeHidden();
            await this.page.setViewportSize({width:viewportSize.width, height:viewportSize.height});
        }catch(error){
            console.log(`Error asserting text: ${text} is hidden on width: ${width}`);
            throw error;
        }
    }
}

export default BasePage;