import {expect, test} from '@playwright/test';
import {IndexPage} from '../pages/index-page';
import {url} from '../data/page-data/index-page-data';

import {indexPageData} from '../data/page-data/index-page-data';

let indexPage: IndexPage;

test.beforeEach(async({page})=>{
    await page.goto(indexPageData.url);
    indexPage = new IndexPage(page);
});

test.describe('Testing Index Page Title', ()=>{
    test('Assert page title', async()=>{
        await indexPage.assertPageTitle(indexPageData.title);
    });
});

test.describe('Testing Index Page Navbar', ()=>{

    test('Assert navbar logo', async()=>{
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
        await indexPage.assertTextIsVisible(logoId, logoText);
    });

    test('Assert navbar links', async()=>{
        //grab nav vars:
        const navClass: string = indexPageData.navbar.nav.class;
        const navLinks = indexPageData.navbar.nav.links;
        //assert each nav link's url:
        for(let i=0; i<navLinks.length; i++){
           await indexPage.assertLinkUrl(navClass, navLinks[i].text, navLinks[i].href);
        }
    });
});

test.describe('Testing Index Page Hero', ()=>{

    test('Assert hero element', async()=>{
        //grab hero vars:
        const heroId: string = indexPageData.hero.id;
        const heroImgSrc: string = indexPageData.hero.img.src;
        const heroTitleId: string = indexPageData.hero.title.id;
        const heroTitleText: string = indexPageData.hero.title.text;

        //assert hero is visible:
        await indexPage.assertElementIsVisible(heroId);
        //assert hero background-image:
        await indexPage.assertBackgroundImg(heroId, heroImgSrc);
        //assert hero title text:
        await indexPage.assertTextIsVisible(heroTitleId, heroTitleText);
    });
});


