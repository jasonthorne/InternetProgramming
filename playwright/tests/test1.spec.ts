import {test, type Page} from '@playwright/test'
import {HomePage} from '../pages/home-page'

let homePage: HomePage;

const URL = 'https://lorem-ipsum-fc.web.app/'; //++++++++++++TEST

test.beforeEach(async({page})=>{
    await page.goto(URL);
    homePage = new HomePage(page, /Lorem Ipsum F.C./);
});

test.describe('Testing Home Page', ()=>{
    test('Asserting Page Title', async()=>{
        await homePage.assertPageTitle();
    });
});