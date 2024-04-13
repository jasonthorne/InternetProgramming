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
        //assert logo image src:
        await indexPage.assertImgSrc(logoId, logoImgAlt, logoImgSrc);
        //assert logo text:
        await indexPage.assertText(logoId, logoText);
       

        //<div class="fixture-grid-item">
		//	<img src="img/teams/Maecenas.png" alt="Maecenas logo">
		//<p>Maecenas</p>
    });

    test('Assert navbar links', async()=>{

        //{ name: string; age: number }[]

        //await page.locator('text=Blog').click()
        //await expect(page).toHaveURL('https://www.programsbuzz.com/blog');
        
        /*
         for(let i=0; i < items.length; i++) {
    await getData(items[i], 1000 * (5 - items[i]));
  }
  console.log("END OF MAIN");

        */

        const links:{href:string,text:string}[] = indexPageData.navbar.nav.links; // = indexPageData.navbar.nav.links;
        //console.log(links);

        //for(let i=0; i<links.length; i++){
           // await getData(items[i], 1000 * (5 - items[i]));
           await indexPage.test1(indexPageData.navbar.nav.class, 'https://lorem-ipsum-fc.web.app/#news-updates-section');
           //await indexPage.test2();
        //}

        //await page.locator('text=Blog').click()
        //await expect(page).toHaveURL('https://www.programsbuzz.com/blog');

    });



});
