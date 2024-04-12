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

        //grab logo vars:
        const logoId: string = indexPageData.navbar.logo.id;
        const logoImgAlt: string = indexPageData.navbar.logo.img.alt;
        const logoImgSrc: string = indexPageData.navbar.logo.img.src;
        const logoText: string = indexPageData.navbar.logo.span.text;

        //assert logo image is visible:
        await indexPage.assertImgIsVisible(logoId, logoImgAlt);
        //assert logo image link:
        await indexPage.assertImgSrc(logoId, logoImgAlt, logoImgSrc);
        //assert logo text:
        await indexPage.assertText(logoId, logoText);
       

        //<div class="fixture-grid-item">
		//	<img src="img/teams/Maecenas.png" alt="Maecenas logo">
		//<p>Maecenas</p>
    });

});
