import {expect, test} from '@playwright/test';
import {Title} from '../../pages/index-page/title';
import {url} from '../../data/page-data/index-page-data';

import {indexPageData} from '../../data/page-data/index-page-data';


let title: Title;

test.beforeEach(async({page})=>{
    await page.goto(url);
    await expect(page).toHaveScreenshot(); ///+++ TEST THIS AT HOME :P
    title = new Title(page);
});

test.describe('Testing Index Page Title', ()=>{
    test('Asserting Page Title', async()=>{
        await title.assertTitle();
    });
});