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
        //++++++++++printout of 'Asserting navbar logo' here+
        //assert logo image is visible:
        await indexPage.assertImgIsVisible(
            //++++++++++printout of 'asserting logo image is visible' here
            indexPageData.navbar.logo.id,
            indexPageData.navbar.logo.img.alt,
        );
        //assert logo image link:
        await indexPage.assertImgSrc(
            indexPageData.navbar.logo.id,
            indexPageData.navbar.logo.img.alt,
            indexPageData.navbar.logo.img.src
        );
        //assert logo text:
        await indexPage.assertText(
            indexPageData.navbar.logo.id,
            indexPageData.navbar.logo.span.text
        );
    });

});
