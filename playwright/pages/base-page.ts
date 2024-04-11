import {expect, Page} from '@playwright/test'
//import {indexPageData} from '../../data/page-data/index-page-data'

export class BasePage{

   // readonly title: RegExp;

    constructor(readonly page: Page){
        /*this.title = title*/

        //let test = indexPageData.navbar.logo.img
    }

    async assertTitle(title: RegExp){ //assert page title:
        await expect(this.page).toHaveTitle(title);
    }

}

export default BasePage;