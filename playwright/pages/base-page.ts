import {expect, Locator, Page} from '@playwright/test'

export class BasePage{

    constructor(readonly page: Page){}

    async assertPageTitle(title: RegExp){ //assert page title:
        await expect(this.page).toHaveTitle(title);
    }

    async assertImgIsVisible(imgId: string, imgName: string){ //assert image is visible
        await expect(this.page.locator(imgId).getByRole('img',{name: imgName})).toBeVisible();
    }

    async assertImgSrc(imgId: string, imgName: string, imgSrc: string){
        expect(await this.page.locator(imgId).getByRole('img',{name: imgName})
        .getAttribute('src')).toMatch(imgSrc);
    }

    


}

export default BasePage;