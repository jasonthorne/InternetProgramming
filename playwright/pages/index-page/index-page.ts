import {expect, Page} from '@playwright/test'
import {indexPageData} from '../../data/page-data/index-page-data'
import BasePage from '../base-page';

export class IndexPage extends BasePage{

   // readonly title: RegExp;

    constructor(readonly page: Page){
        super(page);
        /*this.title = title*/

        let test = indexPageData.navbar.logo.img
    }

    /*async assertTitle(){ //assert page title:
        //await expect(this.page).toHaveTitle(/*this.*///indexPageData.title);
    //}*/

}

export default IndexPage;