import {test, type Page} from '@playwright/test'
import {HomePage} from '../pages/home-page'
import pageData from './data/page-data';

let homePage: HomePage;

//const URL = 'https://lorem-ipsum-fc.web.app/'; //++++++++++++TEST

test.beforeEach(async({page})=>{
    await page.goto(pageData.url); //////IS HOMEPAGE NEEDED HERE - Could it just be 'Page'??????
    homePage = new HomePage(page, /Lorem Ipsum F.C./); //++cHange this ot just pass oage, and have class pull title in itself.
});

test.describe('Testing Home Page', ()=>{
    test('Asserting Page Title', async()=>{
        await homePage.assertPageTitle();
    });
});