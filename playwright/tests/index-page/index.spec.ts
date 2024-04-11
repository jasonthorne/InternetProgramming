import {expect, test} from '@playwright/test';
import {IndexPage} from '../../pages/index-page/index-page';
import {url} from '../../data/page-data/index-page-data';

import {indexPageData} from '../../data/page-data/index-page-data';


let indexPage: IndexPage;

test.beforeEach(async({page})=>{
    await page.goto(url);
    await expect(page).toHaveScreenshot(); ///+++ TEST THIS AT HOME :P
    indexPage = new IndexPage(page);
});

test.describe('Testing Index Page Title', ()=>{
    test('Asserting Page Title', async()=>{
        await indexPage.assertTitle(indexPageData.title);
    });
});