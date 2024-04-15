import {expect, Page} from '@playwright/test'
import {indexPageData} from '../data/index-page-data'
import BasePage from './base-page';

export class IndexPage extends BasePage{

   // readonly title: RegExp;

    constructor(readonly page: Page){
        super(page);
        /*this.title = title*/

        //let test = indexPageData.navbar.logo.img
    }

    //async TEST(){ //assert page title:
        //await expect(this.page).toHaveTitle(/*this.*///indexPageData.title);
    //}

}

export default IndexPage;