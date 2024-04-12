import {expect, test} from '@playwright/test';
import {IndexPage} from '../../pages/index-page';
import {url} from '../../data/page-data/index-page-data';

import {indexPageData} from '../../data/page-data/index-page-data';

let indexPage: IndexPage;

test.beforeEach(async({page})=>{
    await page.goto(indexPageData.url);
    //await page.waitForLoadState("domcontentloaded");
    //await expect(page).toHaveScreenshot();
    indexPage = new IndexPage(page);
});

test.describe('Testing Index Page Title', ()=>{
    test('Asserting Page Title', async()=>{
        await indexPage.assertPageTitle(indexPageData.title);
    });
});

test.describe('Testing Index Page Navbar', ()=>{

    test('Assert navbar logo', async()=>{
        //assert image is visible:
        await indexPage.assertImgIsVisible(
            indexPageData.navbar.logo.id,
            indexPageData.navbar.logo.img.alt,
        );
        //assert image link:
        await indexPage.assertImgSrc(
            indexPageData.navbar.logo.id,
            indexPageData.navbar.logo.img.alt,
            indexPageData.navbar.logo.img.src
        );
        await indexPage.test(indexPageData);
    });

});
