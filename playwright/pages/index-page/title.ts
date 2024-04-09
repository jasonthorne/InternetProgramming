import {expect, Page} from '@playwright/test'
import {title} from '../../data/page-data/index-page-data'

export class Title{

    readonly title: RegExp;
    
    constructor(readonly page: Page){this.title = title}

    async assertPageTitle(){ //assert page title:
        await expect(this.page).toHaveTitle(this.title);
    }
}

export default Title;