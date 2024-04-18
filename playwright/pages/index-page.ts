import {expect, Page} from '@playwright/test'
import BasePage from './base-page';

export class IndexPage extends BasePage{

    constructor(readonly page: Page){
        super(page);
    }

    //assert 'news & updates' heading and content text is visible:
    async assertNewsUpdatesTextIsVisible(selector: string, heading: string, content: string){
        await expect(this.page.locator(selector)
            .filter({hasText: heading})
            .filter({hasText: content}))
            .toBeVisible();
    }
}

export default IndexPage;