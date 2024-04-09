import {expect, test} from '@playwright/test';
import {Navbar} from '../../pages/index-page/navbar';
import {url} from '../../data/page-data/index-page-data';

let navbar: Navbar;

test.beforeEach(async({page})=>{
    await page.goto(url);
    navbar = new Navbar(page); 
});

test.describe('Testing Index Page Navbar', ()=>{

    test('Asserting Navbar Logo', async()=>{
        //await title.assertPageTitle();
        await navbar.assertLogoAltText();
    });
});